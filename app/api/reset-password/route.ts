// her logic reset password
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/Model/User";
import connectDB from "@/app/lib/mongodb";
import bcrypt from "bcryptjs";
export async function POST(req: Request) {
  try {
    // The new passwrod
    const { password, token } = await req.json();

    // Verify the token sent by the user
    const secret = process.env.JWT_SECRET_KEY;
    console.log(secret);

    const decodedToken = jwt.verify(token, secret);
    // اذا انتهى وقت jwt سوف يخرج خطاء وترميه في cach
    console.log("decodedToken");
    console.log(decodedToken);

    // If the token is invalid, return an error
    if (!decodedToken) {
      return NextResponse.json(
        { message: "Invalid token", ok: false },
        {
          status: 401,
        }
      );
    }

    await connectDB();
    // find the user with the id from the token
    const user = await User.findOne({ _id: decodedToken.userId });
    if (!user || !user.tokenhash) {
      return NextResponse.json(
        { message: "Invalid or expired token 1", ok: false },
        {
          status: 401,
        }
      );
    }

    // Compare JWT token with hashed token in DB
    //  اذا لم تنجج المقارنة يعني انا الرابط استعمل من قبل
    const isValid = await bcrypt.compare(token, user.tokenhash);

    if (!isValid) {
      return NextResponse.json(
        { message: "Token mismatch or expired", ok: false },
        { status: 401 }
      );
    }
    // // Check expiration
    // if (Date.now() > user.expirationTime) {
    //     return NextResponse.json(
    //       { message: "Token expired" },
    //       { status: 401 }
    //     );
    //   }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(" the new has hashedPassword");
    console.log(hashedPassword);

    // بعد الاستخدام يجب إبطاله
    user.tokenhash = undefined;
    user.expirationTime = undefined;
    // Update user's password, clear reset token and expiration time
    user.password = hashedPassword;
    const resulte = await user.save();
    console.log("resulte");
    console.log(resulte);
    return NextResponse.json(
      {
        message: "تم تعديل كلمة السر ",
        ok: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "اعد المحاولة ربما نتهت صلاحية الرابط ",
        ok: false,
      },
      { status: 500 }
    );
  }
}
