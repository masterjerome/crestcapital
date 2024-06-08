import Image from "next/image";
import React from "react";
import WhyUsCard from "../molecules/whyUsCard";

const WhyUs = () => {
  return (
    <section className="w-full">
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-3xl md:text-5xl lg:text-6xl">
          Why Crest Capital Bank
        </h1>
        <p className="text-gray-300">
          Give your team the flexibility to connect with vetted freelancers,
          <br className="hidden md:block" />
          execute every project, and expand in-house capabilities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
        <WhyUsCard
          title="Flexible Account Options"
          desc="Choose from a variety of savings accounts tailored to meet your
          specific needs and financial goals."
        />
        <WhyUsCard
          title="Online and mobile access"
          desc="Access your savings account anytime, anywhere with our secure online and mobile banking platforms."
        />
        <WhyUsCard
          title="24/7 Account Access"
          desc="Access your accounts 24/7, giving you control over your finances at any time."
        />
        <WhyUsCard
          title="Secure Transactions"
          desc="Rest easy with our state-of-the-art security measures, ensuring the safety of your online transactions."
        />
        <WhyUsCard
          title="Dedicated customer service"
          desc="Connect with our dedicated customer support team for prompt and personalized assistance."
        />
        <WhyUsCard
          title="Competitive interest rate"
          desc="Earn competitive interest rates on your savings, helping your money grow over time."
        />
      </div>
    </section>
  );
};

export default WhyUs;
