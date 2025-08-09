import SmarterIdia from "@/shared/SmarterIdia";
import Image from "next/image";
import React from "react";

const CustomerReviewSection = () => {
  return (
    <section className="bg-[#0E0E17] relative text-white py-28 z-30 overflow-hidden">
      <div className="space-y-8">
        <SmarterIdia></SmarterIdia>
        <h4 className="text-3xl md:text-5xl text-center">
          Don’t just take our word for it. Hear{" "}
          <br className="hidden md:block" /> what{" "}
          <span className="text-[#808080]">our clients say </span>
        </h4>
      </div>
      <div className="md:w-10/12 w-11/12 mx-auto rounded-3xl bg-black h-[40vh] flex flex-col border-t-[1.78px] border-[#2CCEBA]/60 justify-evenly p-10 gap-8 mt-20">
        <blockquote className="md:text-4xl">
          &quot;Sed sit varius neque turpis enim ut metus consectetur. Tortor
          urna risus phasellus nec. In facilisis pulvinar sagittis odio nibh
          condimentum aliquet commodo.&quot;
        </blockquote>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img src="/assets/customer.png" alt="" className="w-18" />
            <div>
              <h4 className="text-2xl">Alex Larkins</h4>
              <p>Art director at Airbnb</p>
            </div>
          </div>
          <img
            src="/assets/logo 2.png"
            alt=""
            className="w-40 hidden md:block"
          />
        </div>
      </div>
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
};

export default CustomerReviewSection;
