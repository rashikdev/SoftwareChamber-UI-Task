import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
const ContactBtn = () => {
  return (
    <button className="flex items-center justify-center w-[207px] gap-3 p-2 rounded-full bg-gradient-to-r from-white/10 to-white/50 text-2xl border-[1.78px] border-zinc-400">
      <span>Contact Us</span>
      <span className="bg-white rounded-full p-3">
        <AiOutlineLogout color="black" />
      </span>
    </button>
  );
};

export default ContactBtn;
