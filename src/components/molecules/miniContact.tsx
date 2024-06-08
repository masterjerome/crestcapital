import Image from "next/image";
import React from "react";

const MiniContact = ({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex gap-2">
      <Image
        src={icon}
        alt="location"
        width={24}
        height={24}
        className="md:w-8 md:h-8"
      />
      <div>
        <h1 className="text-white lg:text-lg font-medium md:font-bold">
          {title}
        </h1>
        <span className="text-[#FFFFFF29] text-xs md:text-sm">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default MiniContact;
