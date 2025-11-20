import { ArrowBigLeftIcon } from "lucide-react";
import Login from "./Login";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link href={"/"}>
        {" "}
        <h1 className="flex items-center gap-2 justify-center mt-11">
          <ArrowBigLeftIcon />
          Back to Home
        </h1>
      </Link>
      <div className="flex items-center justify-center mb-8">
        <Login />
      </div>
    </div>
  );
};

export default page;
