"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";

const BacktoTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!show) return null;

  return (
    <button
      data-tip="Back to Top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="tooltip tooltip-left tooltip-accent bg-black rounded-full w-11 h-11 flex items-center justify-center border-[1.78px] border-[#2ccebbd6] cursor-pointer hover:scale-110 duration-300 fixed bottom-5 right-5 z-50"
    >
      <IoMdArrowDropup className="text-white" size={30} />
    </button>
  );
};

export default BacktoTopBtn;
