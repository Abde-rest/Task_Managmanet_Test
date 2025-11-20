import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/Model/User";
import connectDB from "@/app/lib/mongodb";
// هنا ليتم تنفيذ منطق login وايضا الauth
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // credentials => {email , password }  or undifind
        // authorize return => User or null
        // type is User => export interface DefaultUser {
        //   id: string
        //   name?: string | null
        //   email?: string | null
        //   image?: string | null
        // }
        try {
          await connectDB();
          console.log("Loogs from route handler  Next auth ");

          // ربما سوف credentials => undifind
          if (!credentials) {
            throw new Error("Missing credentials");
          }

          const { email, password } = credentials;

          // 1) ابحث عن المستخدم
          const user = await User.findOne({ email });

          if (!user) throw new Error("لايوجد حساب بهاته المعلومات ");

          // 2) تحقق من كلمة المرور
          const isMatched = await bcrypt.compare(password, user.password);

          if (!isMatched) throw new Error("الأيميل او كلمة المرور خاطئة ");

          // 3) نجاح → ارجع بيانات المستخدم
          return {
            id: user._id.toString(),
            email: user.email,
          };
        } catch (error) {
          // في حالة حدوث خطأ، نفشل عملية تسجيل الدخول
          // NextAuth يتوقع إما User أو null، لذلك لا نرجع نصوص/سترنغ
          console.error("Auth error in authorize:", error);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      //  session.user => IF undifind
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        return session;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
