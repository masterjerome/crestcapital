import Image from "next/image";
import React from "react";

const WhyUsCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div
      data-aos="zoom-in-up"
      className="h-[350px] hover:bg-secondary-medium transition-all overflow-hidden  rounded-3xl flex flex-col justify-between p-10 md:p-12 lg:p-12 bg-secondary-light"
    >
      <Image src="/icons/dev-icon.svg" alt="icon" width={46} height={46} className="w-[46px] h-[46px]"/>
      <div className="flex flex-col gap-3 h-[100px]">
        <h1 className="font-medium text-xl">{title}</h1>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
