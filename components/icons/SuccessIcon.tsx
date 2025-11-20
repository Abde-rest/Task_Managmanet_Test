import { CheckCheck } from "lucide-react";

const SuccessIcon = ({ size }: { size: number }) => {
  return (
    <>
      <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
        <div className="w-8 h-8 text-green-500 dark:text-green-400 flex items-center justify-center ">
          <CheckCheck size={size} />
        </div>
      </div>
    </>
  );
};

export default SuccessIcon;
