"use client";
import React from "react";
import { IoMdArrowDropup } from "react-icons/io";

const BacktoTopBtn = () => {
  return (
    <div className="tooltip" data-tip="Back to Top">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-black rounded-full w-11 h-11 flex items-center justify-center border-[1.78px] border-[#2ccebbd6] cursor-pointer hover:scale-110 duration-300"
      >
        <IoMdArrowDropup className="text-white" size={30} />
      </button>
    </div>
  );
};

export default BacktoTopBtn;
