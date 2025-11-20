// عندما يدخل المستخدم الايميل عير موجود في قاعدة البيانات عليا ان ارجع رسالة

export default async function fetcherEmailForget(DataForgotEmail: string) {
  // call api route
  const res = await fetch("/api/send", {
    method: "POST",
    body: JSON.stringify({
      email: DataForgotEmail,
    }),
  });

  return res;
}
