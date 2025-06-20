import React from "react";

const loading = () => {
    return (
        <div className="fixed size-full bg-white top-0 left-0 flex justify-center">
            <div className=" w-[50px] h-[50px] border-4 rounded-full border-t-primary border-b-primary animate-spin"></div>
        </div>
    );
};

export default loading;
