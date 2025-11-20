import { passwordShema } from "@/app/lib/validator";

export default function validatePassword(password: string) {
  const result = passwordShema.safeParse({ password });

  if (!result.success) {
    const errorMessage =
      result.error.format().password?._errors[0] ?? "Invalid password";

    return {
      ok: false,
      message: errorMessage,
    };
  }

  return {
    ok: true,
    message: "The password is valid",
  };
}
