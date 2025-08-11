"use client";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "motion/react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="md:p-6">
      <form className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-full bg-gray-100 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full bg-gray-100 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-100 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        <div className="flex gap-3">
          <select
            className="bg-gray-100 rounded-lg px-4 py-3 w-20 cursor-pointer outline-[#27B4A3] focus:ring-teal-400 focus:ring-2 focus:outline-none"
            defaultValue="+1"
          >
            <option>+1</option>
            <option>+44</option>
            <option>+91</option>
          </select>
          <input
            type="tel"
            placeholder="Phone"
            className="flex-1 bg-gray-100 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <input
          type="text"
          placeholder="Job Title"
          className="w-full bg-gray-100 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        <textarea
          placeholder="Your message"
          rows={4}
          className="w-full bg-gray-100 rounded-lg px-4 py-3 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
        ></textarea>

        <motion.button
          onClick={handleSubmit}
          whileTap={{ scale: 0.8 }}
          type="submit"
          className="flex justify-between group items-center bg-gradient-to-l from-teal-400 to-teal-500 text-white md:w-50 w-1/2 rounded-full font-semibold px-4 py-2 cursor-pointer pl-7"
        >
          Submit{" "}
          <span className="text-2xl bg-white text-black rounded-full group-hover:translate-x-2  transition duration-500 p-2">
            <FiArrowRight />
          </span>
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
