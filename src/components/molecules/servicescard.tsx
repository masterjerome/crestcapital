import Image from "next/image";
import React from "react";

const ServicesCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center w-[330px] text-center gap-5"
    >
      <Image src="/images/stars.svg" alt="rating" width={128} height={70} />
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-tertiary-sub">{desc}</p>
    </div>
  );
};

export default ServicesCard;
