"use client";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// "Validtion email is nit found "

import { signIn } from "next-auth/react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import LoadingOverlay from "@/app/components/LoadingOverlay/LoadingOverlay";

import useDilogEmail from "@/app/hooks/useDialogEmail";
import storeLodingOverley from "@/store/storeLodingOverley";

export default function Login() {
  const { setIsOpen } = storeLodingOverley();

  const [DataUser, setDataUser] = useState({
    email: "",
    password: "",
  });
  const [LodingLogin, setLodingLogin] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  // const [showLoadingOverlay, setShowLoadingOverlay] = useState<boolean>(false);

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    //   setError("");
    setLodingLogin(true);

    try {
      const res = await signIn("credentials", {
        ...DataUser,
        redirect: false,
      });

      if (!res?.ok) {
        throw new Error(res?.error || "حدث خطأ أثناء تسجيل الدخول");
      }

      toast.success("تم تسجيل الدخول بنجاح", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // إظهار واجهة التحميل الاحترافية
      setIsOpen({ newstate: true, newmessage: "Login Now " });
      router.replace("/Dashboard");

      // الانتقال بعد تأخير بسيط
      setTimeout(() => {
        setIsOpen({ newstate: false, newmessage: "" });
      }, 500);
    } catch (error) {
      // هذا يسمّى "نوع الحراسة" (type guard).
      if (error instanceof Error) {
        toast.warning(error.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,

          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } finally {
      // setLoading(false);
      setLodingLogin(false);
    }
  };

  // Open Dilog Hook
  const { openDilaog } = useDilogEmail();

  return (
    <>
      <Card className="w-full max-w-sm mt-10">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">Login</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={DataUser.email}
                  onChange={(e) => {
                    setDataUser({
                      ...DataUser,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>

                  <p
                    onClick={() => openDilaog()}
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </p>

                  {/* Dialog forgot email  */}
                </div>

                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={DataUser.password}
                    onChange={(e) => {
                      setDataUser({
                        ...DataUser,
                        password: e.target.value,
                      });
                      //   setError("");
                    }}
                  />
                  <button
                    type="button"
                    className="top-1/2 -translate-y-1/2 absolute right-2.5 hover:bg-white/20 rounded-full w-fit p-1.5"
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <EyeClosed size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {/* {error && <p className="text-sm text-red-500">{error}</p>} */}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full"
            onClick={handleLogin}
            disabled={LodingLogin}>
            {LodingLogin ? <Spinner /> : "Login"}
          </Button>
          <Button variant="outline" className="w-full cursor-pointer">
            <Image
              width={80}
              height={80}
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
              alt="googleLogo"
            />
          </Button>
        </CardFooter>

        <Link href="/SingUp">
          {/* <Link href="/login"> */}
          <p className="text-sm text-center text-blue-200/80">
            ليس لديك حساب؟ انشئ حساب{" "}
          </p>
          {/* </Link> */}
        </Link>
      </Card>
    </>
  );
}
