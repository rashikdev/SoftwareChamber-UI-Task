import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  const merqueeData = [
    {
      id: 1,
      img: "/assets/marqueeImg/developer.png",
      title: "Developers",
    },
    {
      id: 2,
      img: "/assets/marqueeImg/healthcare.png",
      title: "Health Care",
    },
    {
      id: 3,
      img: "/assets/marqueeImg/software.png",
      title: "Software",
    },
    {
      id: 4,
      img: "/assets/marqueeImg/menufacturing.png",
      title: "Manufacturing",
    },
    {
      id: 5,
      img: "/assets/marqueeImg/hospitality.png",
      title: "Hospitality",
    },
  ];

  return (
    <div className="mt-16 space-y-5">
      <Marquee speed={60} gradient={false} pauseOnHover={true}>
        {merqueeData.map((item) => (
          <div
            key={item.id}
            className="flex gap-10 items-center mx-2 p-4 rounded-xl shadow-md"
          >
            <p className="md:text-2xl font-medium">{item.title}</p>
            <img src={item.img} alt={item.title} className="md:w-[200px] w-[100px] h-auto" />
          </div>
        ))}
      </Marquee>
      <Marquee speed={60} direction="right" gradient={false} pauseOnHover={true}>
        {merqueeData.map((item) => (
          <div
            key={item.id}
            className="flex gap-8 items-center md:mx-8 p-4 rounded-xl shadow-md"
          >
            <p className="md:text-2xl font-medium">{item.title}</p>
            <img src={item.img} alt={item.title} className="md:w-[200px] w-[100px] h-auto" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
