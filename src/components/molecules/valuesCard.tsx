import React from "react";

const ValuesCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div
      data-aos="zoom-in-up"
      className="p-8 md:p-10 lg:p-14 rounded-3xl flex flex-col gap-5 bg-basic max-w-[320px] h-[345px] justify-center"
    >
      <h1 className="text-xl lg:text-2xl font-medium lg:font-bold">{title}</h1>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default ValuesCard;
