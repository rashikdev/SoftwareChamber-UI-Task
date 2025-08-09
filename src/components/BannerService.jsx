import ServiceLabel from "@/shared/ServiceLabel";
import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="md:my-16 mt-16 px-4">
      <div className="relative flex justify-center">
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-[#7DFDF3]/10 to-[#7DFDF3]/20 md:w-[calc(100vw-800px)] p-6 flex flex-col md:flex-row gap-6 rounded-4xl lg:h-[40vh] backdrop-blur-sm">
          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/serviceImg.png"
              alt="service"
              width={450}
              height={400}
              className="w-full h-auto max-w-[450px] object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center items-start gap-5 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Software Service Solutions
            </h3>
            <p className="text-base sm:text-lg lg:text-[21px] leading-relaxed">
              Plan, track, and <br className="hidden sm:block" />
              manage projects with <br className="hidden sm:block" />
              precision tools.
            </p>
            <button className="text-lg sm:text-xl bg-[#081412e6] rounded-full px-8 py-3 hover:bg-[#081412] transition">
              Discover
            </button>
          </div>

          {/* Service Option */}

          {/* Top Right */}
          <div className="absolute top-[20%] -right-40 translate-x-1/2 hidden md:flex items-start">
            <img
              src="/assets/icon/servicevector1.png"
              alt=""
              className="w-16 sm:w-24 h-auto"
            />
            <div className="-mt-6">
              <ServiceLabel label="UI/UX Engineering" />
            </div>
          </div>
          {/* Bottom Right */}
          <div className="absolute bottom-[15%] -right-39 translate-x-1/2 hidden md:flex items-end">
            <img
              src="/assets/icon/servicevector2.png"
              alt=""
              className="w-16 sm:w-24 h-auto"
            />
            <div className="-mb-6">
              <ServiceLabel label="Software Service" />
            </div>
          </div>

          {/* Top Left */}
          <div className="absolute top-[25%] -left-45 -translate-x-1/2 hidden md:flex items-start">
            <div className="-mt-6">
              <ServiceLabel label="Website Development" />
            </div>
            <img
              src="/assets/icon/servicevector2.png"
              alt=""
              className="w-16 sm:w-24 h-auto"
            />
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-[15%] -left-45 -translate-x-1/2 hidden md:flex items-end">
            <div className="-mb-6">
              <ServiceLabel label="Mobile App Development" />
            </div>
            <img
              src="/assets/icon/servicevector1.png"
              alt=""
              className="w-12 sm:w-16 h-auto"
            />
          </div>
        </div>

        {/* Gradient Background Layers */}
        <div className="bg-gradient-to-b via-[#00ffe100] to-[#7DFDE3]/20 absolute md:-bottom-12 -bottom-8 w-[85%] md:w-[calc(100vw-850px)] h-[10vh] rounded-4xl"></div>
        <div
          className="bg-gradient-to-b via-[#00ffe100] to-[#7DFDE3]/20 absolute md:-bottom-20 -bottom-14 w-[80%]
        md:w-[calc(100vw-900px)] h-[10vh] rounded-4xl"
        ></div>
      </div>

      {/* Service Cards Mobile View */}
      <div className="md:hidden grid grid-cols-2 gap-4 pt-26">
        <ServiceLabel label="Website Development" />
        <ServiceLabel label="Mobile App Development" />
        <ServiceLabel label="UI/UX Engineering" />
        <ServiceLabel label="Software Service" />
      </div>
    </div>
  );
};

export default Service;
