"use client";

import React, { useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { MdKeyboardArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";

const faqData = [
  {
    question: "What software development services does your company offer?",
    answer:
      "We offer custom software development, web & mobile app development, UI/UX design, API integration, and ongoing maintenance.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work with diverse industries such as healthcare, finance, e-commerce, logistics, and education, delivering tailored solutions.",
  },
  {
    question: "What sets your company apart from the competition?",
    answer:
      "Our focus on quality, scalability, and client satisfaction ensures every project exceeds expectations.",
  },
  {
    question: "Is my project idea and information kept confidential?",
    answer:
      "Absolutely. We sign NDAs and ensure all client data is protected with industry-standard security measures.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-10 text-black">
      <div className="w-11/12 mx-auto text-center space-y-10">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 1 }}
          className="px-5"
        >
          <p className="text-3xl sm:text-4xl lg:text-[4rem] leading-tight font-semibold">
            <span>Comprehensive Answers to the Most</span>{" "}
            <br className="hidden sm:block" />
            <img
              src="/assets/serviceStar.png"
              alt=""
              className="w-10 h-10 sm:w-12 sm:h-12 inline-block mb-2 sm:mb-4 mr-2"
            />
            Common Questions,{" "}
            <span className="text-[#A5A5A5]">
              About Our <br className="hidden sm:block" /> Services
            </span>{" "}
            and How We
            <span className="text-[#A5A5A5]"> Work</span>
            <span className="inline-block rotate-y-180 text-2xl sm:text-4xl ml-3 align-middle">
              <FaArrowTrendUp />
            </span>
          </p>
        </motion.h3>

        {/* Top bar */}
        <div className="flex justify-between font-semibold items-center">
          <p className="md:text-7xl text-4xl">FAQ</p>
          <p className="flex items-center gap-5 md:text-2xl text-xl cursor-pointer hover:text-[#2CCEBA] transition-colors group">
            All FAQ{" "}
            <span className="bg-[#2CCEBA] text-white md:p-3 p-1 rounded-full hover:bg-[#25b6a6] group-hover:translate-x-3 transition-all duration-300">
              <GoArrowRight />
            </span>
          </p>
        </div>

        <hr className="border-[#A5A5A5] border-[1.5px] border-dashed" />
      </div>

      {/* FAQ List */}
      <div className="w-11/12 mx-auto mt-10 space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-[#a5a5a586] pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex sm:justify-between sm:items-center gap-3 w-full font-semibold text-left sm:text-lg md:text-xl lg:text-2xl py-3 cursor-pointer"
            >
              <span className="flex-1 leading-snug">{faq.question}</span>
              <MdKeyboardArrowUp
                className={`text-3xl sm:text-4xl lg:text-5xl p-1 sm:p-2 rounded-full transition-transform duration-300 shrink-0 ${
                  openIndex === index
                    ? "rotate-180 bg-[#2CCEBA] text-white"
                    : "bg-black text-white"
                }`}
              />
            </button>

            {/* Animated Answer */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="max-w-4xl text-sm sm:text-base text-gray-700 pb-3 sm:pb-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
