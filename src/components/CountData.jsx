"use client";

import CountUp from "react-countup";

const CountData = () => {
  const countDatas = [
    { id: 1, count: 20, text: "Teck Partners" },
    { id: 2, count: 150, text: "Projects Completed" },
    { id: 3, count: 1, text: "Satisfied Customers" },
  ];

  return (
    <div>
      {countDatas.map((data) => (
        <div key={data.id} className="flex flex-col items-center md:items-start md:mb-10 mb-6">
          <h2 className="text-3xl md:text-[3.5vw] font-semibold">
            <CountUp end={data.count} duration={1.2} enableScrollSpy={true}/>
            {data.count === 1 ? "K+" : "+"}
          </h2>
          <p className="text-lg sm:text-xl lg:text-3xl font-semibold text-[#808080]">
            {data.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountData;
