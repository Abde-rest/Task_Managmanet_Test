import mongoose from "mongoose";

// declare global {
//   // هذا لمنع مشاكل TypeScript مع المتغير global
//   var mongoose: {
//     conn: typeof mongoose | null;
//     promise: Promise<typeof mongoose> | null;
//   };
// }

// const options = {
//   // خيارات الاتصال الآمنة
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // dbName: "اسم قاعدة البيانات إن أحببت تحديدها هنا"
// };

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    // إذا كان الاتصال موجود مسبقًا
    return cached.conn;
  }

  if (!cached.promise) {
    // إنشاء وعد اتصال جديد إذا لم يكن موجود
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI غير معرف في المتغيرات البيئية");
    }
    cached.promise = mongoose
      .connect(process.env.MONGODB_URI)
      .then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
    console.log("✅ تم الاتصال بـ MongoDB بنجاح");
    return cached.conn;
  } catch (error) {
    console.error("❌ حدث خطأ أثناء الاتصال بـ MongoDB:", error);
    cached.promise = null;
    throw error;
  }
}

export default connectDB;
