"use client";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { motion } from "motion/react";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Efficiency",
      icon: "/assets/featuresImg/efficiency.png",
      description:
        "Optimized processes that save time and resources, ensuring maximum productivity.",
    },
    {
      id: 2,
      title: "Adaptability",
      icon: "/assets/featuresImg/adaptability.png",
      description:
        "Flexible solutions that quickly adjust to changing requirements and environments.",
    },
    {
      id: 3,
      title: "Scalability",
      icon: "/assets/featuresImg/scalability.png",
      description:
        "Systems designed to grow effortlessly with your business demands.",
    },
    {
      id: 4,
      title: "Precision",
      icon: "/assets/featuresImg/precision.png",
      description:
        "Accurate and detail-oriented execution for consistent, high-quality results.",
    },
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: "easeOut",
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="mb-10 space-y-8">
      {/* text content */}
      <div className="text-center md:w-7/12 mx-auto space-y-8 p-2 md:p-0">
        <motion.h3
          initial={{ opacity: 0, x: -34 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.8 }}
          className="md:text-7xl text-4xl"
        >
          Why Choose <br className="hidden md:block" /> Softwarechamber
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.8 }}
          className="md:text-2xl"
        >
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </motion.p>
      </div>
      {/* discuss button */}
      <div className="md:my-20 my-10">
        <motion.button
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex gap-8 items-center bg-gradient-to-l from-[#2CCEBA] to-[#16AD71] px-5 py-2 rounded-full mx-auto text-white cursor-pointer group"
        >
          Let's Discuss{" "}
          <span className="mt-1 bg-gray-100 p-2 rounded-full text-black -rotate-45 group-hover:rotate-0 transition-all duration-300 group-hover:translate-x-2">
            <GoArrowRight size={20} />
          </span>
        </motion.button>
      </div>

      {/* feature cards */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        className="w-11/12 mx-auto grid md:grid-cols-4 gap-5 pb-10"
      >
        {features.map((feature) => (
          <motion.div
            variants={itemVariant}
            key={feature.id}
            whileHover={{
              scale: 1.06,
              y: -8,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
              transition: { type: "spring", stiffness: 200, damping: 15 },
            }}
            className={`bg-[#F3F3F3] rounded-3xl px-5 h-fit py-10 mx-5 md:mx-0 flex flex-col group justify-center 
    transition-colors duration-500 ease-out
    hover:bg-[#2CCEBA] hover:text-white cursor-default
    ${feature.id === 2 || feature.id === 4 ? "md:mt-10" : ""}`}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-3xl font-semibold">{feature.title}</h4>
              <div className="bg-[#2CCEBA] p-2 rounded-full group-hover:rotate-180 transition-all duration-500">
                <img src={feature.icon} alt="" />
              </div>
            </div>
            <hr className="my-5 text-[#80808073] group-hover:text-white transition-colors duration-500" />
            <p className="mt-5 text-[#808080] text-[18px] group-hover:text-white group-hover:-translate-y-4 transition-all duration-500">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
