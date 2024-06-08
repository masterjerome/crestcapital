import React from "react";

const AboutHero = () => {
  return (
    <div className="bg-abouthero bg-no-repeat bg-cover lg:bg-contain min-h-screen flex flex-col items-center rounded-3xl p-6 -mt-6">
      <div className="flex flex-col items-center justify-center lg:w-2/3 pt-20 gap-4 mt-8 lg:mt-0">
        <h4 className="md:text-lg text-primary">About us</h4>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-center">What is Crest Capital Bank?</h1>
        <p className="text-tertiary-sub text-sm md:text-lg lg:text-2xl text-center">
          At Crest Capital, we believe in redefining the banking experience by
          putting our customers first. With a commitment to innovation,
          integrity, and personalized service, we strive to empower individuals
          and businesses to achieve their financial goals.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
