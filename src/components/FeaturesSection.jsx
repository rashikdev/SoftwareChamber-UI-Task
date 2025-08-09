import React from "react";
import { GoArrowRight } from "react-icons/go";

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

  return (
    <div className="my-10 space-y-8">
      {/* text content */}
      <div className="text-center md:w-7/12 mx-auto space-y-8">
        <h3 className="md:text-7xl text-5xl">
          Why Choose <br className="hidden md:block" /> Softwarechamber
        </h3>
        <p className="md:text-2xl text-xl">
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </p>
      </div>
      {/* discuss button */}
      <div className="md:my-20 my-10">
        <button className="flex gap-8 items-center bg-gradient-to-l from-[#2CCEBA] to-[#16AD71] px-5 py-2 rounded-full mx-auto text-white">
          Let's Discuss{" "}
          <span className="mt-1 bg-gray-100 p-2 rounded-full text-black -rotate-40">
            <GoArrowRight size={20} />
          </span>
        </button>
      </div>

      {/* feature cards */}
      <div className="w-11/12 mx-auto grid md:grid-cols-4 gap-5">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`bg-[#F3F3F3] rounded-3xl px-5 h-fit py-10 mx-5 md:mx-0 flex flex-col group justify-center hover:bg-[#2CCEBA] hover:text-white transition-all duration-300 cursor-default hover:scale-105 shadow-xl ${
              feature.id === 2 || feature.id === 4 ? "md:mt-10" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-3xl font-semibold">{feature.title}</h4>
              <div className="bg-[#2CCEBA] p-2 rounded-full group-hover:animate-spin">
                <img src={feature.icon} alt="" />
              </div>
            </div>
            <hr className="my-5 text-[#80808073] group-hover:text-white" />
            <p className="mt-5 text-[#808080] text-[18px] group-hover:text-white group-hover:-translate-y-5 transition-all duration-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
