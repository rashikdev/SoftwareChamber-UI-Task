import { GoArrowUpRight } from "react-icons/go";

const ServiceCard = () => {
  const services = [
    {
      id: 1,
      title: "Web & Mobile App Development",
      text: "We design and build high-performance web and mobile applications tailored to your business needs.",
    },
    {
      id: 2,
      title: "Application Software Services",
      text: "From planning to deployment, we provide end-to-end application software solutions for all industries.",
    },
    {
      id: 3,
      title: "Software Coding & Optimization",
      text: "We write clean, efficient, and scalable code, while optimizing existing systems for better performance.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service) => (
        <div
          key={service.id}
          className={`md:h-[420px] h-fit p-6 rounded-4xl flex flex-col gap-4 md:gap-0 justify-between hover:bg-[#27B4A3] hover:text-white cursor-default transition-all duration-300 group ${
            service.id === 2 ? "bg-[#27B4A3] text-white" : "bg-[#f3f3f3]"
          }`}
        >
          <h3 className="lg:text-[44px] text-3xl">{service.title}</h3>
          <p
            className={`text-2xl group-hover:text-white ${
              service.id === 2 ? "text-white" : "text-[#808080]"
            }`}
          >
            {service.text}
          </p>
          <button className="text-2xl bg-white text-black rounded-full p-4 shadow-lg w-fit group-hover:translate-y-[-10px] group-hover:translate-x-[10px] transition-all duration-300 cursor-pointer">
            <GoArrowUpRight />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
