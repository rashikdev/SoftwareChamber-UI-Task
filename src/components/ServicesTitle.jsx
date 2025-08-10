"use client";
import { FaArrowTrendUp } from "react-icons/fa6";
import { motion } from "motion/react";
const ServicesTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-center"
    >
      <p className="text-3xl sm:text-4xl lg:text-[4.5rem] leading-tight font-semibold">
        <img
          src="/assets/serviceStar.png"
          alt=""
          className="w-10 h-10 sm:w-12 sm:h-12 inline-block mb-2 sm:mb-4 mr-2 animate-pulse"
        />
        At Software Chamber,{" "}
        <span className="text-[#A5A5A5]">we specialize</span> in turning complex
        challenges into elegant{" "}
        <span className="text-[#A5A5A5]">digital solutions</span>
        <span className="inline-block rotate-y-180 text-2xl sm:text-4xl ml-3 align-middle">
          <FaArrowTrendUp />
        </span>
      </p>
    </motion.div>
  );
};

export default ServicesTitle;
