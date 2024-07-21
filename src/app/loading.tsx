import React from "react";

const loading = () => {
  return (
    <div className="fixed top-2/4 left-2/4 -translate-2/4 -translate-y-2/4">
      <div className=" w-[50px] h-[50px] border-4 rounded-full border-t-primary border-b-primary animate-spin"></div>
    </div>
  );
};

export default loading;
