import Link from "next/link";
import ContentFormChangePasswrod from "./ContentFormChangePasswrod";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { token } = await searchParams;

  if (!token) {
    return (
      <div className=" flex  text-centerjustify-center items-center  relative  h-screen ">
        <div className="  text-center absolute top-1/2  -translate-1/2 left-1/2 translate-y-1/2">
          <h1 className="py-4"> حبيبي انت لست مؤهل بعد</h1>
          <Link href="/">Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <ContentFormChangePasswrod token={token as string} />
    </div>
  );
};

export default page;
