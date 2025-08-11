"use client";
import ContactBtn from "@/shared/ContactBtn";
import React from "react";
import Service from "./BannerService";
import Image from "next/image";
import SmarterIdia from "@/shared/SmarterIdia";
import { motion } from "motion/react";
const Banner = () => {
  return (
    <div className="pt-[111px] md:pb-[100px] pb-[50px] relative bg-[url('/assets/BannerImg.png')] bg-no-repeat bg-cover z-40">
      <div className="w-11/12 mx-auto z-20">
        <SmarterIdia></SmarterIdia>
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-[32px] md:text-[120px] -space-y-10 bg-gradient-to-b from-[#00FFE0] to-white bg-clip-text text-transparent border-white mt-[30px] md:mt-0"
        >
          <p>We are your Software</p>
          <p className="flex justify-center items-center gap-5 h-[140px]">
            Development{" "}
            <span className="items-center gap-3 md:mt-5 mt-2 hidden lg:flex">
              <img
                src="/assets/icon/code.png"
                alt="code icon"
                className="w-6 md:w-auto"
              />
              <img
                src="/assets/icon/contact.png"
                alt="contact icon"
                className="w-6 md:w-auto"
              />
            </span>
            {""}Team
          </p>
          <p>in The Cloud</p>
        </motion.div>
        <div className="flex justify-center mt-[30px]">
          <ContactBtn></ContactBtn>
        </div>
      </div>
      <Service></Service>
      <Image
        src="/assets/BannerStar.png"
        alt="banner"
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL="/assets/BannerStar.png"
        className="w-[90vw] md:h-[80vh] h-[40vh] absolute top-20 left-0 -z-10 animate-pulse"
      />
    </div>
  );
};

export default Banner;
