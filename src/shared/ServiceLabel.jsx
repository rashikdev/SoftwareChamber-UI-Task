"use client";
import React from "react";
import { motion } from "motion/react";
const ServiceLabel = ({ label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 border-[1.78px] border-zinc-500 h-[50px] px-4 py-3 rounded-[10px] md:text-xl bg-gradient-to-tr from-white/10 to-white/50"
    >
      <img src="/assets/icon/serviceicon.png" alt="service icon" />
      <p>{label}</p>
    </motion.div>
  );
};

export default ServiceLabel;
