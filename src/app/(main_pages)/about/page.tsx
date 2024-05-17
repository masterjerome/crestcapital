import AboutHero from "@/components/sections/aboutHero";
import AboutValues from "@/components/sections/aboutValues";
import LearnMore from "@/components/sections/homeLearnMore";
import Prefooter from "@/components/sections/prefooter";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="bg-secondary text-white md:p-20 lg:p-36">
        <AboutHero />
        <AboutValues />
        <LearnMore
          image="/images/suit.svg"
          reverse
          title="What Sets Us Apart"
          desc="At CSB, we understand that each customer is unique, which is why we take a personalized approach to banking. Whether you're opening your first savings account, buying your dream home, or expanding your business, we're here to provide guidance, support, and solutions tailored to your needs."
        />
      </div>
      <div className="bg-secondary">
        <Prefooter />
      </div>
    </>
  );
};

export default AboutUs;
