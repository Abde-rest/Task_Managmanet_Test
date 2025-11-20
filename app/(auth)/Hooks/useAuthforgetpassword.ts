import { useState } from "react";

import apiforegtpassword from "../service/api_foregt-password";
import { useRouter } from "next/navigation";
import ValidationPassword from "@/app/(auth)/utilis/validatePassword";
// custome Hook Can validtion password
const useAuthforgetpassword = () => {
  // const { ValidationPassword } = usevalidtionPassword();

  const [dataForm, setDataForm] = useState({
    password: "",
    confirmpassword: "",
    message: "",
  });
  const [showLoadingOverlay, setshowLoadingOverlay] = useState(false);
  const router = useRouter();
  const hendelforgotpasswrod = async (token: string | undefined) => {
    // Validation Password
    const isValidat = ValidationPassword(dataForm.password);
    console.log("isValidat");
    console.log(isValidat);

    if (!isValidat.ok) {
      console.log("Is validtion 2");
      setDataForm({ ...dataForm, message: isValidat.message });
      return;
    }

    if (dataForm.password !== dataForm.confirmpassword) {
      setDataForm({ ...dataForm, message: "The password are not identical" });
      return;
    }

    // if everthing is good
    // Now Send The email and toekn
    if (!token) {
      setDataForm({ ...dataForm, message: "Token is required" });
      return;
    }
    // {message :
    const { ok, message } = await apiforegtpassword(dataForm.password, token);
    //   status:
    // }
    console.log("=====================");
    console.log(ok);
    console.log(message);
    console.log("=====================");
    // console.log(res);

    if (ok) {
      // showing Ui looding
      setshowLoadingOverlay(true);
      setTimeout(() => {
        router.replace("/login");
      }, 2000);
    } else {
      setDataForm({
        ...dataForm,
        message: message,
      });
    }
  };

  return {
    hendelforgotpasswrod,
    setDataForm,
    showLoadingOverlay,
    dataForm,
  };
};

export default useAuthforgetpassword;
