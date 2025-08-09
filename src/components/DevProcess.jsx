import ContactBtn from "@/shared/ContactBtn";
import SmarterIdia from "@/shared/SmarterIdia";
import Image from "next/image";
import React from "react";

const DevProcess = () => {
  return (
    <section className="bg-[#0E0E17] text-white my-28 relative flex flex-col items-center overflow-hidden">
      <div className="md:my-[100px] my-[50px] text-center space-y-8 flex flex-col items-center">
        <SmarterIdia></SmarterIdia>
        <h3 className="md:text-[4rem] text-4xl leading-tight mt-8">
          <p>Our Software</p>
          <p className="text-[#A5A5A5]">Development Process</p>
        </h3>
        <p className="md:text-2xl text-[#808080] pb-5 px-5 md:px-0">
          Deliver personalized experiences to your customers with AI-powered
          recommendation <br className="hidden md:block"/> engines and dynamic content generation.
        </p>
        <ContactBtn></ContactBtn>
      </div>
      <div className="">
        <Image
          src="/assets/devProcess.png"
          alt="development process"
          width={1000}
          height={1000}
          className="md:w-[calc(100vw-400px)] h-auto"
        />
      </div>
      {/* background images */}
      <div>
        <Image
          src="/assets/servicesBg.png"
          alt=""
          width={600}
          height={500}
          className="absolute top-0 right-0 md:w-[700px] w-[400px]"
        />
        <Image
          src="/assets/devBannerglow.png"
          alt=""
          width={600}
          height={500}
          className="absolute top-0 -right-35 md:w-[900px] w-[400px] rotate-90"
        />
        <Image
          src="/assets/servicesBg.png"
          alt=""
          width={600}
          height={500}
          className="absolute top-0 left-0 w-[700px]"
        />
        <Image
          src="/assets/devBannerglow.png"
          alt=""
          width={600}
          height={500}
          className="absolute top-0 left-0 w-[900px]"
        />
      </div>
    </section>
  );
};

export default DevProcess;
