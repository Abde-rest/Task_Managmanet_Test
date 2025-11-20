// her logic send email By using Library Resend
// send message to email user
import User from "@/Model/User";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import crypto from "crypto"; 
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import connectDB from "@/app/lib/mongodb";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    //1  if the user its found ?
    await connectDB();
    const user = await User.findOne({ email: email });

    if (!user) {
      console.log("Warning : This email its not found in system");

      return NextResponse.json(
        // { message: "تم إرسال الرابط إذا كان البريد صحيحاً." },
        // لااسطيع اخبار المستخدم ان هاذا البريد غير موجود
        // لذالك نخبره فقط بعملية نجاح العنلية اي اضهار ui فقط
        { status: 200 }
      );
    }
    // 2 Generate a unique JWT token for the user that contains the user's id
    const secret = process.env.JWT_SECRET_KEY;
    const resetToken = jwt.sign({ userId: user._id, email: email }, secret, {
      expiresIn: "10m",
    });

    console.log("resetToken from jwt ");
    console.log(resetToken);

    // 3. تشفير التوكن لتخزينه في قاعدة البيانات (لحمايته في حال اختراق DB)
    const hashedTokenInDB = await bcrypt.hash(resetToken, 10);
    const expirationTime = Date.now() + 3600000; // انتهاء الصلاحية بعد ساعة واحدة (مللي ثانية)

    // add the hash token  and expirationTime in  Data base

    await User.updateOne(
      { _id: user._id },
      { $set: { tokenhash: hashedTokenInDB, expirationTime: expirationTime } }
    );

    // 4 The link send in email
    // إرسال الرابط (هذا هو الرابط الذي سيرسل في الإيميل)
    const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${resetToken}`;

    // 5 Send Email

    const { data, error } = await resend.emails.send({
      // This domain form resend not custome domain
      from: "My_App@resend.dev",
      to: `${email}`,
      subject: "Hello world",
      // html: `<p>Congrats on sending your <strong>first email</strong>!</p>
      // <a href="${resetLink}">Your Change the Passwrod</a>
      // `,
      html: `<p> متزيدش تنسا وشكرا
      
      <a href="${resetLink}"><strong>change the password</strong>!</p><a/>
      
      `,
    });

    console.log("error");
    console.log(error);
    console.log("data");
    console.log(data);

    if (error) {
      return Response.json({ message: error.message }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
