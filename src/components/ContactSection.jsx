"use client";
import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "motion/react";

const ContactSection = () => {
  return (
    <div id="contact" className="py-20 w-11/12 mx-auto">
      {/* text content */}
      <div className="text-center space-y-7">
        <motion.h4
          initial={{ opacity: 0, x: 54 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="md:text-7xl text-3xl font-bold"
        >
          Let’s talk about your next <br className="hidden md:block" /> project.
          <span className="text-[#808080]">We’re here to help.</span>
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 54 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="md:text-xl md:w-130 mx-auto text-[#808080]"
        >
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </motion.p>
      </div>

      {/* contact form */}
      <div className="flex items-center md:gap-8 md:mt-20 mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/assets/contact.png"
            alt=""
            width={600}
            height={600}
            className="w-[500px] h-[550px] hidden md:block"
            placeholder="blur"
            blurDataURL="/assets/contact.png"
          />
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: 124 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="md:flex-1">
          <ContactForm></ContactForm>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
