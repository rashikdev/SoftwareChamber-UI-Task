import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div id="contact" className="py-20 w-11/12 mx-auto">
      {/* text content */}
      <div className="text-center space-y-5">
        <h4 className="md:text-7xl text-3xl font-bold">
          Let’s talk about your next <br className="hidden md:block"/> project.
          <span className="text-[#808080]">We’re here to help.</span>
        </h4>
        <p className="text-xl md:w-120 mx-auto text-[#808080]">
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </p>
      </div>

      {/* contact form */}
      <div className="flex items-center md:gap-8 mt-20">
        <div>
          <Image
            src="/assets/contact.png"
            alt=""
            width={600}
            height={600}
            className="w-[500px] h-[550px] hidden md:block"
            placeholder="blur"
            blurDataURL="/assets/contact.png"
          />
        </div>
        <div className="flex-1">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
