import ServicesCard from "@/components/molecules/servicescard";
import ContactUsSection from "@/components/sections/contactUsSection";
import Prefooter from "@/components/sections/prefooter";
import React from "react";

const Services = () => {
  return (
    <div className="bg-secondary text-white flex flex-col items-center">
      <div className="text-center lg:w-1/2 pt-28 pb-14">
        <h4 className="text-primary text-lg">Our Services</h4>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
          The only bank you&apos;ll ever need
        </h1>
      </div>
      <div className="bg-serviceshero bg-no-repeat bg-cover w-full min-h-screen flex flex-wrap items-center justify-center gap-6 p-6 md:p-20 lg:p-36">
        <ServicesCard
          title="Savings Accounts and CDs"
          desc=" Protect your hard-earned money with FDIC insured savings accounts
        featuring highly competitive interest rates along with no hidden monthly
        fees. Choose terms from 3 months up to 5 years on Certificates of
        Deposit to lock in returns."
        />
        <ServicesCard
          title="Checking and Debit Cards"
          desc="Enjoy full-service checking accounts with no ATM fees worldwide and zero liability fraud protection on our German-issued debit cards with advanced EMV chip and PIN technology for enhanced European-standard security."
        />
        <ServicesCard
          title="Home & Auto Loans"
          desc="Enjoy full-service checking accounts with no ATM fees worldwide and zero liability fraud protection on our German-issued debit cards with advanced EMV chip and PIN technology for enhanced European-standard security."
        />
        <ServicesCard
          title="Investing & Retirement"
          desc="Access globally diversified portfolios, stocks, bonds, annuities, mutual funds and managed retirement offerings through our investment management partners. Take charge of your financial future with the help of time-tested German financial planning."
        />
      </div>
      <ContactUsSection />
      <Prefooter />
    </div>
  );
};

export default Services;
