import { z } from "zod";

// Schema Validation

export const userSchema = z.object({
  username: z
    .string("اسم المستخدم مطلوب")
    .min(5, "الاسم يجب أن يحتوي على خمس حروف  على الأقل"),
  email: z.string("البريد الإلكتروني مطلوب").email("in Valid Email "),
  password: z
    .string("كلمة المرور مطلوبة")
    .min(8, "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل")
    .regex(/[A-Z]/, "كلمة المرور يجب أن تحتوي على حرف كبير واحد على الأقل")
    .regex(/[0-9]/, "كلمة المرور يجب أن تحتوي على رقم واحد على الأقل"),
});
export type SingUpDataUser = z.infer<typeof userSchema>;
export const passwordShema = z.object({
  password: z
    .string("كلمة المرور مطلوبة")
    .min(8, "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل")
    .regex(/[A-Z]/, "كلمة المرور يجب أن تحتوي على حرف كبير واحد على الأقل")
    .regex(/[0-9]/, "كلمة المرور يجب أن تحتوي على رقم واحد على الأقل"),
});
