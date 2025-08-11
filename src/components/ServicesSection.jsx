"use client";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import ServiceCard from "./ServiceCard";
import CountData from "./CountData";
import ServicesTitle from "./ServicesTitle";
import { motion } from "motion/react";

const ServicesSection = () => {
  const demoDatas = [
    {
      id: "a1",
      title: "Your Team in the cloud",
      text: "We Hire Best and brightest Talents to build world class technology",
    },
    {
      id: "a2",
      title: "Grow more with less",
      text: "We have a competitive pricing structure",
    },
    {
      id: "a3",
      title: "Weekly sprint and reviews",
      text: "Our fast review and feedback loop is designed to keep in you in the driver's seat",
    },
    {
      id: "a4",
      title: "Communication First",
      text: "We use modem tools and services to collaborate",
    },
  ];

  return (
    <section id="services" className="w-11/12 mx-auto px-4 lg:px-12">
      {/* Services Text */}
      <ServicesTitle></ServicesTitle>

      {/* Counts - Image - Demo */}
      <div className="flex flex-col gap-10 lg:flex-row items-center my-16">
        {/* Count section */}
        <div className="flex flex-col gap-6 text-center lg:text-left md:w-3/9">
          <CountData></CountData>
        </div>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center"
        >
          <Image
            src="/assets/togetherImg.png"
            alt="service"
            width={620}
            height={680}
            className="w-[620px] h-auto object-contain"
          />
        </motion.div>

        {/* Demo list */}
        <div className="flex flex-col md:w-3/6">
          {demoDatas.map((data, index) => (
            <div key={data.id}>
              <div className="flex gap-4">
                <div className="bg-[#27B4A3] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                  <p className="bg-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </p>
                </div>
                <div className="w-[70%]">
                  <h3 className="text-[18px] md:text-[1.5vw] font-semibold">
                    {data.title}
                  </h3>
                  <p className="text-sm md:text-[1.2vw]">{data.text}</p>
                </div>
              </div>

              {/* Divider except last item */}
              {index < demoDatas.length - 1 && (
                <hr className="my-4 border-gray-300 w-[85%]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* service card */}
      <div>
        <div className="flex justify-between items-center">
          <h3 className="md:text-6xl text-2xl font-semibold">
            Services{" "}
            <span>
              <img
                src="/assets/serviceStar.png"
                alt=""
                className="md:w-10 md:h-10 w-6 inline-block animate-pulse"
              />
            </span>
          </h3>
          <p className="flex items-center gap-2 font-semibold group cursor-pointer md:text-xl hover:text-[#27B4A3]">
            All Services{" "}
            <span className="mt-1 group-hover:translate-x-2 group-hover:bg-[#27B4A3] group-hover:text-white transition-all duration-300 bg-gray-100 p-1 rounded-full">
              <GoArrowRight size={20} />
            </span>
          </p>
        </div>
        <div className="my-10">
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
