import React from "react";
import Button from "../atoms/button";

const Prefooter = () => {
  return (
    <div className="bg-prefooter bg-no-repeat bg-cover h-[476px] text-white flex justify-center items-center">
      <div data-aos="zoom-in" className="text-center w-3/4">
        <h1 className="font-medium lg:font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
          Join The Financial Revolution With Crest Capital Bank Today.
        </h1>
        <h4 className="mb-6">A creative agency that lead and inspire</h4>
        <Button href="/create" text="Sign Up" />
      </div>
    </div>
  );
};

export default Prefooter;
