"use client";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { motion } from "motion/react";
const ContactBtn = ({ sz }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={`flex items-center justify-between ${
        sz ? "md:w-[167px]" : "md:w-[207px]"
      } w-[130px] gap-2 md:py-2 ${
        sz ? "md:px-2" : "md:px-4"
      } p-[6px] rounded-full bg-gradient-to-r from-white/10 to-white/50 md:text-xl border-[1.78px] border-zinc-400 md:z-50 backdrop-blur-md
    transition-shadow duration-300
    hover:shadow-[0_0_12px_3px_rgba(39,180,163,0.7)]`}
    >
      <span>Contact Us</span>
      <span className="bg-white rounded-full md:p-[7px] p-1">
        <AiOutlineLogout color="black" />
      </span>
    </motion.button>
  );
};

export default ContactBtn;
