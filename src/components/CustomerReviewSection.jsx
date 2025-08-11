"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import SmarterIdia from "@/shared/SmarterIdia";

import "swiper/css";
import "swiper/css/effect-fade";

const reviews = [
  {
    text: "Sed sit varius neque turpis enim ut metus consectetur. Tortor urna risus phasellus nec. In facilisis pulvinar sagittis odio nibh condimentum aliquet commodo.",
    name: "Alex Larkins",
    role: "Art director at Airbnb",
    avatar: "/assets/customer.png",
    logo: "/assets/logo 2.png",
  },
  {
    text: "Their work exceeded our expectations! We were impressed with their creativity, attention to detail, and timely delivery.",
    name: "Samantha Lee",
    role: "Product Manager at Shopify",
    avatar: "/assets/customer.png",
    logo: "/assets/logo 2.png",
  },
  {
    text: "Professional, responsive, and highly skilled. They truly understand how to bring ideas to life.",
    name: "David Johnson",
    role: "CEO at FinTech Co.",
    avatar: "/assets/customer.png",
    logo: "/assets/logo 2.png",
  },
];

export default function CustomerReviewSection() {
  return (
    <section className="bg-[#0E0E17] relative text-white py-28 z-30 overflow-hidden">
      <div className="space-y-8">
        <SmarterIdia />
        <motion.h4 
        initial={{ opacity: 0, y: 24, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-3xl md:text-5xl text-center">
          Don’t just take our word for it. Hear{" "}
          <br className="hidden md:block" /> what{" "}
          <span className="text-[#808080]">our clients say </span>
        </motion.h4>
      </div>

      <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
      className="md:w-10/12 w-11/12 mx-auto rounded-3xl bg-black h-[40vh] border-t-[1.78px] border-[#2CCEBA]/60 mt-20 overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={500}
          loop
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-evenly p-10 gap-8 h-full">
                {/* Quote */}
                <blockquote className="md:text-4xl relative">
                  <motion.span
                    className="absolute -left-6 -top-6 text-[#2CCEBA] text-6xl opacity-20"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    “
                  </motion.span>
                  {review.text}
                </blockquote>

                {/* Avatar + Stars + Logo */}
                <div className="flex items-center justify-between">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.06 } },
                    }}
                    className="flex items-center gap-8"
                  >
                    <motion.img
                      src={review.avatar}
                      alt={review.name}
                      className="w-18"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    />
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <h4 className="text-2xl">{review.name}</h4>
                      <p>{review.role}</p>
                      <motion.div
                        className="flex gap-1 mt-2"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i} className="text-[#2CCEBA] text-lg">
                              ★
                            </span>
                          ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <Image
                    src={review.logo}
                    alt=""
                    width={160}
                    height={40}
                    className="hidden md:block"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Background Glow */}
      <Image
        src="/assets/pertnersImg/BannerGlow1.png"
        alt=""
        width={600}
        height={600}
        className="absolute top-0 left-10 -z-10"
      />
      <Image
        src="/assets/pertnersImg/BannerGlow1.png"
        alt=""
        width={400}
        height={400}
        className="absolute bottom-0 right-0 -z-10"
      />
    </section>
  );
}
