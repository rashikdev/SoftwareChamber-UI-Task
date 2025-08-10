"use client";
import ContactBtn from "@/shared/ContactBtn";
import SmarterIdia from "@/shared/SmarterIdia";
import Image from "next/image";
import React from "react";
import MarqueeSection from "./MerqueeSection";
import { motion } from "motion/react";

const PertnerCompany = () => {
  const pertners = [
    {
      id: 1,
      name: "Spotify",
      icon: "/assets/pertnersImg/spotify.png",
    },
    {
      id: 2,
      name: "TalentQl",
      icon: "/assets/pertnersImg/talentql.png",
    },
    {
      id: 3,
      name: "DropBox",
      icon: "/assets/pertnersImg/dropbox.png",
    },
    {
      id: 4,
      name: "Fliqpay",
      icon: "/assets/pertnersImg/fliqpay.png",
    },
    {
      id: 5,
      name: "Slack",
      icon: "/assets/pertnersImg/slack.png",
    },
  ];

  const firstPertners = pertners.slice(0, 2);
  const secondPertners = pertners.slice(2, 4);
  const thirdPertners = pertners.splice(4)[0];

  const containerVerient = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[url('/assets/pertnersImg/BannerGlow1.png')] bg-cover bg-no-repeat bg-center bg-[#0E0E17] relative text-white py-20 md:px-8 px-5 z-40 overflow-hidden">
      {/* text and pertners logo */}
      <div className="flex flex-col md:flex-row justify-between items-center z-30">
        <motion.h3
          initial={{ opacity: 0, y: 54, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 1 }}
          className="md:text-[93px] text-4xl md:leading-24 text-center md:text-left"
        >
          Our Stack Powers of <br className="hidden md:block" /> the{" "}
          <span className="text-[#808080]">World’s</span> Most{" "}
          <br className="hidden md:block" />
          <span className="text-[#808080]">Beloved Companies</span>
        </motion.h3>
        <motion.div
          variants={containerVerient}
          initial="hidden"
          whileInView="show"
        >
          <div className="flex gap-5 my-5">
            {firstPertners.map((pertner) => (
              <motion.div
                variants={itemVariant}
                whileHover={{ scale: 1.1 }}
                key={pertner.id}
                className="flex items-center gap-4 bg-gradient-to-b from-[#2CCEBA] to-[#2CCEBA]/5 px-6 py-2 rounded-full grayscale-100 hover:grayscale-0 cursor-pointer"
              >
                <div className="bg-white p-2 md:p-3 rounded-full">
                  <img src={pertner.icon} alt="" className="md:w-6 w-5" />
                </div>
                <h4 className="md:text-2xl">{pertner.name}</h4>
              </motion.div>
            ))}
          </div>
          <div className="flex gap-5 my-5 md:-ml-18">
            {secondPertners.map((pertner) => (
              <motion.div
                variants={itemVariant}
                whileHover={{ scale: 1.1 }}
                key={pertner.id}
                className="flex items-center gap-4 bg-gradient-to-b from-[#2CCEBA] to-[#2CCEBA]/5 px-6 py-2 rounded-full grayscale-100 hover:grayscale-0 cursor-pointer"
              >
                <div className="bg-white p-2 md:p-3 rounded-full">
                  <img
                    src={pertner.icon}
                    alt=""
                    className="md:w-6 md:h-6 w-5 h-5"
                  />
                </div>
                <h4 className="md:text-2xl">{pertner.name}</h4>
              </motion.div>
            ))}
          </div>
          <div className="md:ml-14 ml-24">
            <motion.div
              variants={itemVariant}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-4 bg-gradient-to-b from-[#2CCEBA] to-[#2CCEBA]/5 px-6 w-fit py-2 rounded-full grayscale-100 hover:grayscale-0 cursor-pointer"
            >
              <div className="bg-white p-2 md:p-3 rounded-full">
                <img src={thirdPertners.icon} alt="" className="md:w-6 w-5" />
              </div>
              <h4 className="md:text-2xl">{thirdPertners.name}</h4>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="relative rounded-3xl mt-20 p-[1.58px] bg-gradient-to-b from-[#2CCEBA] to-[#083a34] -z-30">
        <div className="rounded-3xl bg-gradient-to-b from-[#011513] to-[#011f1b] py-20 md:px-8 px-2 flex flex-col md:gap-20 gap-10 items-center text-center">
          <SmarterIdia />
          <div className="bg-white p-3 md:rounded-4xl rounded-3xl w-fit mx-auto">
            <img
              src="/assets/pertnersImg/partnerCenterIcon.png"
              alt=""
              className="md:w-20 w-14 p-4"
            />
          </div>
          <motion.h4
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 1 }}
            className="text-[5vw]"
          >
            Uncover the Design and Development Projects{" "}
            <span className="text-[#808080]">That Set Us Apart</span>
          </motion.h4>
          <ContactBtn></ContactBtn>
        </div>
      </div>

      <div className="mt-20">
        <SmarterIdia />
        <MarqueeSection></MarqueeSection>
      </div>
      <Image
        src="/assets/pertnersImg/BannerGlow1.png"
        alt=""
        width={500}
        height={600}
        className="absolute top-0 left-0 w-full border-white -z-20"
      />
    </section>
  );
};

export default PertnerCompany;
