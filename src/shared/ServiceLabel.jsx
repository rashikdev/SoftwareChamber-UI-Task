import React from "react";

const ServiceLabel = ({ label }) => {
  return (
    <div className="flex items-center gap-3 border-[1.78px] border-zinc-500 h-[50px] px-4 py-3 rounded-[10px] md:text-xl bg-gradient-to-tr from-white/10 to-white/50">
      <img src="/assets/icon/serviceicon.png" alt="service icon" />
      <p>{label}</p>
    </div>
  );
};

export default ServiceLabel;
