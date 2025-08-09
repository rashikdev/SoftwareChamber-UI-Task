import ContactBtn from "@/shared/ContactBtn";
import React from "react";
import Service from "./BannerService";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="mt-[111px] md:pb-[100px] pb-[50px] relative">
      <div className="w-11/12 mx-auto">
        <p className="bg-radial from-black to-[#2CCEBA]/60 border-[1.78px] border-[#2CCEBA] rounded-full text-center w-fit mx-auto md:px-[18px] md:py-3 px-4 py-1 flex items-center gap-2 text-[18px]">
          <span className="">
            <img src="/assets/Staricon.png" alt="" className="w-4" />
          </span>
          <span>Smarter Idea, instant soultions</span>
        </p>
        <div className="text-center text-[32px] md:text-[120px] -space-y-10 bg-gradient-to-b from-[#00FFE0] to-white bg-clip-text text-transparent border-white mt-[30px] md:mt-0">
          <p>We are your Software</p>
          <p className="flex justify-center items-center gap-5 h-[140px]">
            Development{" "}
            <span className="items-center gap-3 md:mt-5 mt-2 hidden lg:flex">
              <img
                src="/assets/icon/code.png"
                alt="code icon"
                className="w-6 md:w-auto"
              />
              <img
                src="/assets/icon/contact.png"
                alt="contact icon"
                className="w-6 md:w-auto"
              />
            </span>
            {""}Team
          </p>
          <p>in The Cloud</p>
        </div>
        <div className="flex justify-center mt-[30px]">
          <ContactBtn></ContactBtn>
        </div>
      </div>
      <Service></Service>
      <div>
        <Image
          src="/assets/leftsideImg.png"
          alt="banner star"
          width={500}
          height={500}
          className="md:w-[600px] w-[250px] h-auto absolute -top-45 left-0"
        />
        <Image
          src="/assets/rightsideImg.png"
          alt="banner star"
          width={500}
          height={500}
          className="md:w-[600px] w-[250px] h-auto absolute -top-45 right-0"
        />
        <Image
          src="/assets/bgstar.png"
          alt="banner star"
          width={300}
          height={300}
          className="w-[300px] h-auto absolute top-0 left-[60%] hidden md:block animate-pulse"
        />
        <Image
          src="/assets/bgstar.png"
          alt="banner star"
          width={300}
          height={300}
          className="w-[300px] h-auto absolute top-[40%] right-20 hidden md:block animate-pulse"
        />
        <Image
          src="/assets/bgstar2.png"
          alt="banner star"
          width={200}
          height={200}
          className="w-[120px] h-auto absolute top-[50%] left-20 hidden md:block animate-pulse"
        />
        <Image
          src="/assets/bgstar2.png"
          alt="banner star"
          width={300}
          height={300}
          className="w-[100px] h-auto absolute top-[20%] left-[20%] animate-pulse"
        />
        <Image
          src="/assets/bgstar.png"
          alt="banner star"
          width={300}
          height={300}
          className="w-[300px] h-auto absolute md:-top-10 md:left-[20%] left-0 top-0 animate-pulse"
        />
      </div>
    </div>
  );
};

export default Banner;
