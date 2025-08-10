"use client";
import ContactBtn from "@/shared/ContactBtn";
import SmarterIdia from "@/shared/SmarterIdia";
import Image from "next/image";
import React from "react";
import ArcFlow from "./ArcFlow";
import { motion } from "motion/react";

const DevProcess = () => {
  return (
    <section className="bg-[#0E0E17] text-white my-28 relative flex flex-col items-center overflow-hidden z-40">
      <div className="md:my-[100px] my-[50px] text-center space-y-8 flex flex-col items-center z-30">
        <SmarterIdia></SmarterIdia>
        <motion.h3
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:text-[4rem] text-4xl leading-tight mt-8"
        >
          <p>Our Software</p>
          <p className="text-[#A5A5A5]">Development Process</p>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:text-2xl text-[#808080] pb-5 px-5 md:px-0"
        >
          Deliver personalized experiences to your customers with AI-powered
          recommendation <br className="hidden md:block" /> engines and dynamic
          content generation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactBtn></ContactBtn>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <ArcFlow></ArcFlow>
      </motion.div>

      <div className="">
        <Image
          src="/assets/Glob.png"
          alt="development process"
          width={1000}
          height={1000}
          className="md:w-[calc(100vw-180px)] w-[calc(0vw-100px)] h-auto absolute bottom-0 left-0 right-0 mx-auto animate-pulse"
        />
      </div>
      {/* background images */}
      <div>
        <Image
          src="/assets/servicesBg.png"
          alt=""
          width={600}
          height={500}
          className="absolute top-0 right-0 md:w-[700px] w-[400px] z-0"
        />
        <Image
          src="/assets/devBannerglow.png"
          alt=""
          width={600}
          height={500}
          className="absolute top-0 -right-35 md:w-[900px] w-[400px] rotate-90 z-0"
        />
        <Image
          src="/assets/servicesBg.png"
          alt=""
          width={600}
          height={500}
          className="absolute top-0 left-0 w-[700px] z-0"
        />
        <Image
          src="/assets/devBannerglow.png"
          alt=""
          width={600}
          height={500}
          className="absolute top-0 left-0 w-[900px] z-0"
        />
      </div>
    </section>
  );
};

export default DevProcess;
