import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="">
      <Link href="/">
        <img
          src="/assets/logo.png"
          alt=""
          className="md:w-[215px] md:h-[60px] h-[45px] w-[150px]"
        />
      </Link>
    </div>
  );
};

export default Logo;
