import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="border-2  btn btn-xs sm:btn-sm md:btn-md lg:btn-lg   text-white bg-gradient-to-r from-primary to-secondary shadow-xl w-full">
      {children}
    </button>
  );
};

export default PrimaryButton;
