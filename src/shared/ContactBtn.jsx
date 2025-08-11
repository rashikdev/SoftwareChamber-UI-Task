"use client";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { motion } from "motion/react";
const ContactBtn = ({ nav }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={`flex justify-between items-center  py-2 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-400 md:text-xl
      text-sm border-[1.78px] border-zinc-400 cursor-pointer ${nav ? "md:w-[176px] px-3" : "md:w-[207px] gap-5 px-5"}`}
    >
      <span>Contact Us</span>
      <span className="bg-white rounded-full md:p-[7px] p-1">
        <AiOutlineLogout color="black" />
      </span>
    </motion.button>
  );
};

export default ContactBtn;
