import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const countDatas = [
    { id: 1, count: "20+", text: "Teck Partners" },
    { id: 2, count: "150+", text: "Projects Completed" },
    { id: 3, count: "1k+", text: "Satisfied Customers" },
  ];

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
    <section className="w-11/12 mx-auto px-4 lg:px-12">
      {/* Services Text */}
      <div className="text-center">
        <p className="text-3xl sm:text-4xl lg:text-[4.5rem] leading-tight font-semibold">
          <img
            src="/assets/serviceStar.png"
            alt=""
            className="w-10 h-10 sm:w-12 sm:h-12 inline-block mb-2 sm:mb-4 mr-2"
          />
          At Software Chamber,{" "}
          <span className="text-[#A5A5A5]">we specialize</span> in turning
          complex challenges into elegant{" "}
          <span className="text-[#A5A5A5]">digital solutions</span>
          <span className="inline-block rotate-y-180 text-2xl sm:text-4xl ml-3 align-middle">
            <FaArrowTrendUp />
          </span>
        </p>
      </div>

      {/* Counts - Image - Demo */}
      <div className="flex flex-col gap-10 lg:flex-row items-center my-16">
        {/* Count section */}
        <div className="flex flex-col gap-6 text-center lg:text-left md:w-3/9">
          {countDatas.map((data) => (
            <div key={data.id} className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                {data.count}
              </h2>
              <p className="text-lg sm:text-xl lg:text-3xl font-semibold text-[#808080]">
                {data.text}
              </p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/assets/togetherImg.png"
            alt="service"
            width={620}
            height={680}
            className="w-[620px] h-auto object-contain"
          />
        </div>

        {/* Demo list */}
        <div className="flex flex-col md:w-3/6">
          {demoDatas.map((data, index) => (
            <div key={data.id}>
              <div className="flex items-center gap-4">
                <div className="bg-[#27B4A3] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                  <p className="bg-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </p>
                </div>
                <div className="w-[70%]">
                  <h3 className="text-[18px] sm:text-2xl lg:text-3xl font-semibold">
                    {data.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-xl">{data.text}</p>
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
          <h3 className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
            Services{" "}
            <span>
              <img
                src="/assets/serviceStar.png"
                alt=""
                className="w-10 h-10 inline-block"
              />
            </span>
          </h3>
          <p className="flex items-center gap-2 font-semibold group cursor-pointer">
            All Services{" "}
            <span className="mt-1 group-hover:translate-x-2 transition-all duration-300 bg-gray-100 p-1 rounded-full">
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
