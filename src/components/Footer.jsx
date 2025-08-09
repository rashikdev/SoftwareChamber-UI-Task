import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  const socialMedia = [
    { id: 1, label: "Instagram" },
    { id: 2, label: "Twitter" },
    { id: 3, label: "Tiktok" },
    { id: 4, label: "Facebook" },
    { id: 5, label: "Linkedin" },
    { id: 6, label: "Youtube" },
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

  return (
    <footer className="bg-[#0E0E17] py-16 md:py-20 relative z-30 overflow-hidden">
      <div className="w-11/12 mx-auto">
        <h3 className="text-white text-4xl sm:text-6xl lg:text-8xl leading-tight">
          LET’S TALK
        </h3>

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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socialMedia.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 text-lg sm:text-xl text-[#A6A6A6] hover:text-white cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <span>{item.label}</span>
                    <IoIosArrowRoundForward
                      className="-rotate-40 mt-1"
                      size={24}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* contact */}
          <div className="flex flex-col gap-8 sm:gap-12 w-full sm:w-1/5">
            {addressData.map((item) => (
              <div key={item.id} className="space-y-3">
                <h5 className="text-2xl sm:text-3xl lg:text-4xl text-white">
                  {item.label}
                </h5>
                <p className="text-lg sm:text-xl lg:text-[28px] text-[#A6A6A6] leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/footerImg.png"
              alt=""
              width={370}
              height={480}
              className="w-60 sm:w-72 lg:w-[370px]"
            />
          </div>
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
