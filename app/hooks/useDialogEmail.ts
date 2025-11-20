import fetcherEmailForget from "@/service/fetcherEmailForget";
import storDialogEmail from "@/store/storeOpenDialogEmail";
import { useState } from "react";

const useDilogEmail = () => {
  const { isOpen, setIsOpen } = storDialogEmail();
  const [senLoding, setsendloding] = useState<boolean>(false);
  const [OpenSuccessSendEmail, SetOpenSuccessSendEmail] =
    useState<boolean>(false);
  const [DataForgotEmail, setDataForgotEmail] = useState<string>("");
  const [messageError, setmessageError] = useState<string>();

  const openDilaog = () => {
    console.log("Open Dilaog");
    setIsOpen(true);
  };

  const closeDialog = () => {
    console.log("close Dilaog");
    setIsOpen(false);
    setDataForgotEmail("");
  };

  const Sendemail = async () => {
    setmessageError("");
    setDataForgotEmail("");
    // SetOpenSuccessSendEmail(false);
    // Her You Can use   validtion Function in  Zode To be a ggod validation
    if (DataForgotEmail.length === 0) {
      setmessageError("Enter your Email Please");

      return;
    }

    // send // function send The email to Api router (Back end )
    setsendloding(true);
    const res = await fetcherEmailForget(DataForgotEmail);
    // في حالة ان المستهدم غير مسجل في النظام سوف يقون بالارسال ايضا واعطاء عملية النجاح
    const data = await res.json();

    // error sending
    if (!res.ok) {
      setmessageError(`${data.message}`);
      setsendloding(false);
      return;
    }

    //  hedding DilogEmail and show Succsee Send
    SetOpenSuccessSendEmail(true);
    closeDialog();
    setsendloding(false);
  };

  return {
    openDilaog,
    closeDialog,
    isOpen,
    setDataForgotEmail,
    DataForgotEmail,
    senLoding,
    setsendloding,
    Sendemail,
    messageError,
    setmessageError,
    OpenSuccessSendEmail,
    SetOpenSuccessSendEmail,
  };
};

export default useDilogEmail;
