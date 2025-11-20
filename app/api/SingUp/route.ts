import connectDB from "@/app/lib/mongodb";
import User from "@/Model/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// pOST DATA USER hER
export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    // connect Db
    const Isconnect = await connectDB();
    if (Isconnect) {
      // تحقق إذا كان المستخدم موجود مسبقًا
      // الايميل موحود او السمتخدم موجود
      const existingUser = await User.findOne({
        $or: [{ email }, { username }],
      });
      if (existingUser) {
        return NextResponse.json(
          { message: "اسم المستخدم او الأيميل موجود مسبقا " },
          {
            status: 400,
          }
        );
      }

      // تشفير كلمة المرور
      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({
        username: username,
        email: email,
        password: hashedPassword,
      });
    } else {
      return NextResponse.json(
        {
          message: {
            success: false,
            message: "لم يتم الأتصال بقاعدة البيانات ",
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: {
          success: true,
          message: "تم التسجيل بنجاح ",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: String(error),
      },
      { status: 500 }
    );
  }
}
