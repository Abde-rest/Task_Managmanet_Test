import React from "react";
import DilogForgotemail from "../components/Dialog/DilogForgotemail";

const layoutAuthPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DilogForgotemail />
      {children}
    </div>
  );
};

export default layoutAuthPage;
