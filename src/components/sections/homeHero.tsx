import React from "react";
import Button from "../atoms/button";

const Hero = () => {
  return (
    <main className="bg-hero bg-no-repeat bg-cover min-h-screen flex items-center justify-center relative">
      <div className="flex flex-col justify-center p-4 items-center text-white text-center lg:w-[70vw] gap-5 lg:gap-8">
        <h4 data-aos="zoom-in-down" className="lg:text-lg text-primary">
          All-in-one banking for everyone
        </h4>
        <h1
          data-aos="zoom-in"
          className="text-4xl md:text:5xl lg:text-6xl font-semibold"
        >
          Banking Beyond Boundaries
        </h1>
        <p
          data-aos="zoom-in-up"
          className="md:text-lg lg:text-2xl text-gray-400"
        >
          Experience a new era of financial freedom with innovative banking
          solutions. Join us on a journey where every transaction is secure,
          every goal is achievable, and every dream is within reach
        </p>
        <div className="flex flex-col md:flex-row gap-3 lg:gap-6">
          <Button
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            text="Open Your Account"
            href="/create"
          />
          <Button
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            text="Schedule a Demo"
            href="/login"
            mode={1}
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-secondary h-20 backdrop-blur-sm"></div>
    </main>
  );
};

export default Hero;
