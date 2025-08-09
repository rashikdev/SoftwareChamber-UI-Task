"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { TbMenu3 } from "react-icons/tb";
import ContactBtn from "@/shared/ContactBtn";
import Menu from "./Menu";
import { motion } from "motion/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-11/12 mx-auto">
      <ul className="flex justify-between items-center">
        <li>
          <Logo></Logo>
        </li>
        <li>
          <div className="flex gap-4 md:gap-8">
            <div className="z-50">
              <ContactBtn></ContactBtn>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] rounded-full flex items-center justify-center bg-gradient-to-r from-white/10 to-white/50 border-[1.78px] border-zinc-400 p-2 cursor-pointer z-50"
            >
              <TbMenu3 size={30} className="rotate-x-180" />
            </motion.button>
          </div>
        </li>
      </ul>
      {open && (
        <div className="z-40">
          <Menu setOpen={setOpen}></Menu>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
