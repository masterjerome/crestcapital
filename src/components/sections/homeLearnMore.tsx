import Image from "next/image";
import Link from "next/link";
import React from "react";

const LearnMore = ({
  image,
  title,
  desc,
  reverse,
}: {
  image: string;
  title: string;
  desc: string;
  reverse?: boolean;
}) => {
  return (
    <section
      data-aos="fade-up"
      className={`flex flex-col-reverse  ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } pt-20 md:pt-28 lg:pt-32 gap-8 lg:gap-20`}
    >
      <div>
        <Image
          src={image}
          alt="learn more"
          width={400}
          height={400}
          className="w-full lg:min-w-[450px] max-w-[450px] object-fit rounded-3xl"
        />
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="font-medium text-3xl lg:text-4xl">{title}</h1>
        <p className=" md:text-lg text-tertiary-sub">{desc}</p>
        <Link href="/about">
          <button className="group text-lg text-left">
            Learn more
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LearnMore;
