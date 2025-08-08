import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
const ContactBtn = () => {
  return (
    <button className="flex items-center justify-center md:w-[207px] w-[130px] md:gap-3 gap-2 p-2 rounded-full bg-gradient-to-r from-white/10 to-white/50 md:text-2xl border-[1.78px] border-zinc-400">
      <span>Contact Us</span>
      <span className="bg-white rounded-full md:p-3 p-1">
        <AiOutlineLogout color="black" />
      </span>
    </button>
  );
};

export default ContactBtn;
