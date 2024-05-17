import React from "react";
import Button from "../atoms/button";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-6 md:p-20 lg:p-36 border-t border-t-tertiary">
      <div className="flex flex-col items-center lg:items-start py-12">
        <h1 className="text-white text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-medium lg:font-bold mb-8">
          Let&apos;s talk about your Account
        </h1>
        <Button href="/" text="Subscribe to our Newsletter" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="border-b border-b-tertiary pb-3">
          <h4 className="text-primary text-right mb-1">FIND US</h4>
          <p className="text-[#FFFFFF99] text-right">East Thames Plaza,Ripple Rd, Dagenham RM9 6UQ, <br className="hidden lg:block"/> United Kingdom</p>
        </div>
        <div className="border-b border-b-tertiary pb-3">
          <h4 className="text-primary text-right mb-1">EMAIL US</h4>
          <p className="text-[#FFFFFF99] text-right">Crestcapital@info.google.com</p>
        </div>
        <div className="border-b border-b-tertiary pb-3">
          <h4 className="text-primary text-right mb-1">CALL US</h4>
          <p className="text-[#FFFFFF99] text-right">+44 7441 393510</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
