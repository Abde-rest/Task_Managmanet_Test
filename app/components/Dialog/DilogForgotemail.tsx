"use client";
import useDilogEmail from "@/app/hooks/useDialogEmail";
import SuccessIcon from "@/components/icons/SuccessIcon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";

const DilogForgotemail = () => {
  // Open and close Dilaog
  const {
    isOpen,
    closeDialog,
    DataForgotEmail,
    setDataForgotEmail,
    Sendemail,
    senLoding,
    setsendloding,
    messageError,
    setmessageError,
    OpenSuccessSendEmail,
    SetOpenSuccessSendEmail,
  } = useDilogEmail();

  return (
    <>
      {/* Sucsse Dilaog  */}
      <Dialog open={OpenSuccessSendEmail}>
        <DialogContent className="sm:max-w-md">
          <div>
            <h1>
              <SuccessIcon size={40} />
            </h1>

            <p className="text-center py-5">
              Succes Send .... Check Your Email{" "}
            </p>

            <DialogClose asChild>
              <Button
                onClick={() => {
                  SetOpenSuccessSendEmail(false);
                }}
                type="button"
                className="w-full">
                close
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={isOpen}>
        <DialogContent className="sm:max-w-md">
          {/*  */}
          <DialogHeader>
            <DialogTitle>Enter Your Email </DialogTitle>
            <DialogDescription>
              Enter Your email to send verfication link
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                // value={DataForgot_Email}
                placeholder="exampel@gmail.com"
                onChange={(e) => {
                  setDataForgotEmail(e.target.value);
                }}
              />
              <p className="text-red-300 text-sm">{messageError}</p>
            </div>
          </div>
          <DialogFooter className=" flex flex-col  sm:justify-start ">
            <Button
              type="button"
              onClick={() => {
                Sendemail();
                // setsendloding(true);
              }}>
              {senLoding ? <Spinner /> : "Send"}
            </Button>
            <Button
              onClick={() => {
                closeDialog();
                setsendloding(false);
                setmessageError("");
              }}
              type="button"
              className="bg-red-300 ">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DilogForgotemail;
