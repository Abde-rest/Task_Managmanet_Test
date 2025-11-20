"use client";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { userSchema } from "@/app/lib/validator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import LoadingOverlay from "@/app/components/LoadingOverlay/LoadingOverlay";

import useDilogEmail from "@/app/hooks/useDialogEmail";
const SingUp = () => {
  const [DataUser, setDataUser] = useState({});
  const [LodingSingUp, setLodingSingUp] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, seterrors] = useState<Record<string, string>>({
    username: "",
    email: "",
    password: "",
  });
  const [showLoadingOverlay, setShowLoadingOverlay] = useState<boolean>(false);
  const router = useRouter();

  const handelSingUp = async () => {
    // show looding
    setLodingSingUp(true);

    // fetch data User To the Route Handler SinUp Use
    try {
      // Validtion

      //  true of false
      const result = userSchema.safeParse(DataUser);

      if (!result.success) {
        const formattedErrors: Record<string, string> = {};
        result.error.issues.forEach((issue) => {
          const path = issue.path[0] as string;
          const messagePath = issue.message;
          if (path) {
            formattedErrors[path] = messagePath;
          }
        });

        // console.log("formatErros");
        // console.log(formattedErrors);

        seterrors(formattedErrors);
        setLodingSingUp(false);

        return;
      }

      const res = await fetch("/api/SingUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(DataUser),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
        // the code stopHer and Go to Catch
      }

      toast.success(data.message.message + "سوف يتم تحويلك ...", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,

        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // تسجيل الدخول تلقائياً بعد التسجيل الناجح
      const loginRes = await signIn("credentials", {
        email: (DataUser as { email: string; password: string }).email,
        password: (DataUser as { email: string; password: string }).password,
        redirect: false,
      });

      if (!loginRes?.ok) {
        throw new Error("حدث خطاء في عملية تسجيل الدخول ");
      }

      setTimeout(() => {
        router.replace("/Dashboard");
      }, 2000);

      setShowLoadingOverlay(true);
    } catch (error) {
      // هذا يسمّى “نوع الحراسة” (type guard).
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
      setLodingSingUp(false);
    }
  };

  const { openDilaog } = useDilogEmail();

  return (
    <>
      {showLoadingOverlay && <LoadingOverlay />}
      <Card className="w-full max-w-sm mt-10">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">Sing Up </CardTitle>
          <CardDescription>Create New account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">username</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="ex:mohame"
                  required
                  onChange={(e) => {
                    setDataUser({ ...DataUser, username: e.target.value });
                    seterrors({ ...errors, username: "" });
                  }}
                />
                {errors.username && (
                  <p className="text-sm text-red-500">{errors.username}</p>
                )}
                {/* {errors.username && <div>{errors.username}</div>} */}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => {
                    setDataUser({ ...DataUser, email: e.target.value });
                    seterrors({ ...errors, email: "" });
                  }}
                />

                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/* // onClick={handelforgotPasswrod} */}
                  <p
                    onClick={() => openDilaog()}
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </p>
                </div>

                <div className="relative">
                  {" "}
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    onChange={(e) => {
                      setDataUser({ ...DataUser, password: e.target.value });
                      seterrors({ ...errors, password: "" });
                    }}
                  />
                  <button
                    type="button"
                    className=" top-1/2 -translate-y-1/2 absolute right-2.5 hover:bg-white/20 rounded-full w-fit p-1.5"
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <EyeClosed size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full"
            onClick={() => {
              handelSingUp();
            }}
            disabled={LodingSingUp ? true : false}>
            {LodingSingUp ? <Spinner /> : " Sing Up"}
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

        <Link href="/login">
          <p className="text-sm text-center text-blue-200/80">
            لديك حساب؟ سجل دخولك
          </p>
        </Link>
      </Card>
    </>
  );
};

export default SingUp;
