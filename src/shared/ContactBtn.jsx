"use client";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { motion } from "motion/react";
const ContactBtn = () => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center md:w-[207px] w-[130px] md:gap-3 gap-2 p-2 rounded-full bg-gradient-to-r from-white/10 to-white/50 md:text-2xl border-[1.78px] border-zinc-400 z-50"
    >
      <span>Contact Us</span>
      <span className="bg-white rounded-full md:p-3 p-1">
        <AiOutlineLogout color="black" />
      </span>
    </motion.button>
  );
};

export default ContactBtn;
