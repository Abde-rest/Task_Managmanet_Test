// React Query Doweldn ربما
// This is ui
"use client";
import Logo from "@/app/components/logo";
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
import useAuthforgetpassword from "@/app/(auth)/Hooks/useAuthforgetpassword";
import LoadingOverlay from "@/app/components/LoadingOverlay/LoadingOverlay";
import Link from "next/link";

const ContentFormChangePasswrod = ({ token }: { token: string }) => {
  const { hendelforgotpasswrod, setDataForm, dataForm, showLoadingOverlay } =
    useAuthforgetpassword();

  return (
    <div className="flex items-center justify-center relative h-screen m-auto">
      {showLoadingOverlay && <LoadingOverlay />}
      <Card className="w-full max-w-sm absolute top-1/2 -translate-1/2  left-1/2 -translate-y-1/2">
        <Logo />
        <CardHeader className="text-center">
          <CardTitle>Change Your Password</CardTitle>
          <CardDescription>
            Enter your Passwrod below to change your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={(e) => {
                    setDataForm({ ...dataForm, password: e.target.value });
                  }}
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirm">confirm password</Label>
                </div>
                <Input
                  id="confirm"
                  type="password"
                  required
                  onChange={(e) => {
                    setDataForm({
                      ...dataForm,
                      confirmpassword: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </form>
          <p
            className="text-sm text-red-400 text-center  mt-2
          ">
            {dataForm.message}
          </p>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full"
            onClick={() => hendelforgotpasswrod(token)}>
            Reset Password
          </Button>

          <Link href={"/login"} className=" w-full  text-center p-2">
            Return The Login{" "}
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContentFormChangePasswrod;
