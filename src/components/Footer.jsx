"use client";
import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "motion/react";
import { PiTiktokLogoLight } from "react-icons/pi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const socialMedia = [
    { id: 1, label: "Instagram", icon: <FaInstagram color="#E1306C" /> },
    { id: 2, label: "Twitter", icon: <FaXTwitter color="" /> },
    { id: 3, label: "Tiktok", icon: <PiTiktokLogoLight color="red" /> },
    { id: 4, label: "Facebook", icon: <FaFacebook color="#1877F2" /> },
    { id: 5, label: "Linkedin", icon: <FaLinkedin color="#0A66C2" /> },
    { id: 6, label: "Youtube", icon: <FaYoutube color="#FF0000" /> },
  ];

  const addressData = [
    {
      id: 1,
      label: "Address",
      value: "1901 thornridge Cir, Shiloh, Hawaii 81063",
    },
    {
      id: 2,
      label: "PHONE",
      value: "[+1] 872-298-3989",
    },
    {
      id: 3,
      label: "EMAIL",
      value: "hello@tranzit.com",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0.5,
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-[#0E0E17] py-16 md:py-20 relative z-30 overflow-hidden">
      <div className="w-11/12 mx-auto">
        <motion.h3
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // viewport={{ once: true, amount: 0.8 }}
          className="text-white text-4xl sm:text-6xl lg:text-8xl leading-tight"
        >
          LET’S TALK
        </motion.h3>

        <div className="flex flex-col lg:flex-row justify-between mt-12 lg:mt-24 gap-12">
          {/* social media */}
          <div className="lg:w-1/3 space-y-8">
            <p className="text-[#A6A6A6] text-lg sm:text-xl lg:text-[28px] leading-relaxed">
              A new era of energy, elegance, and elite competition begins here.
              Where passion meets performance on the court like never before.
            </p>
            <div>
              <h5 className="text-2xl sm:text-3xl my-5 text-white">
                Social media
              </h5>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="grid grid-cols-3 gap-3"
              >
                {socialMedia.map((item) => (
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    key={item.id}
                    className="flex items-center gap-2 md:text-xl text-[#A6A6A6] hover:text-white cursor-pointer group"
                  >
                    <span>{item.label}</span>
                    <span className="group-hover:rotate-8 transition duration-300 ">
                      {item.icon}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* contact */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col gap-8 sm:gap-12 w-full sm:w-1/5"
          >
            {addressData.map((item) => (
              <motion.div
                variants={itemVariants}
                key={item.id}
                className="space-y-3"
              >
                <h5 className="text-2xl sm:text-3xl lg:text-4xl text-white">
                  {item.label}
                </h5>
                <p className="text-lg sm:text-xl lg:text-[28px] text-[#A6A6A6] leading-relaxed">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* image */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/assets/footerImg.png"
              alt=""
              width={370}
              height={480}
              className="w-60 sm:w-72 lg:w-[370px]"
            />
          </motion.div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 lg:mt-20 border-t border-[#A6A6A6]/25 pt-6 sm:pt-10 border-dashed text-sm sm:text-lg lg:text-2xl text-[#A6A6A6] gap-4">
          <p className="text-center sm:text-left">
            {new Date().getFullYear()} Software Chamber All Right Reserved
          </p>
          <div className="flex items-center gap-6 sm:gap-12">
            <p className="cursor-pointer hover:text-white transition">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:text-white transition">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>

      {/* glowing circle */}
      <Image
        src="/assets/pertnersImg/BannerGlow1.png"
        alt=""
        width={700}
        height={700}
        className="absolute -top-10 right-0 -z-10"
      />
      <Image
        src="/assets/pertnersImg/BannerGlow1.png"
        alt=""
        width={700}
        height={700}
        className="absolute bottom-10 -left-40 -z-10"
      />
    </footer>
  );
};

export default Footer;
