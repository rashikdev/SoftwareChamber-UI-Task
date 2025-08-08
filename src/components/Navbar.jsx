import React from "react";
import Logo from "./Logo";
import { TbMenu3 } from "react-icons/tb";
import ContactBtn from "@/shared/ContactBtn";
const Navbar = () => {
  return (
    <nav className="">
      <ul className="flex justify-between items-center">
        <li>
          <Logo></Logo>
        </li>
        <li>
          <div className="flex gap-4">
            <ContactBtn></ContactBtn>
            <button className="w-[70px] h-[70px] rounded-full flex items-center justify-center rotate-x-180 bg-gradient-to-r from-white/10 to-white/50 border-[1.78px] border-zinc-400">
              <TbMenu3 size={30} />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
