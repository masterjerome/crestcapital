import React from "react";
import ValuesCard from "../molecules/valuesCard";

const AboutValues = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center my-12 md:my-14 lg:my-16">Our Values</h1>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <ValuesCard
          title="What sets us apart"
          desc="At CSB, we tailor banking to your unique needs, whether it's your first account or expanding your business."
        />
        <ValuesCard
          title="Our Mission"
          desc="At CSB, our mission is to provide innovative banking solutions that enhance your financial well-being. We're your trusted partner, offering tailored products and exceptional service."
        />
        <ValuesCard
          title="Our commitment to you"
          desc="As your financial partner, we're dedicated to transparency, reliability, and excellence. With a wide range of banking services and a focus on your satisfaction, your success is our priority."
        />
      </div>
    </div>
  );
};

export default AboutValues;
