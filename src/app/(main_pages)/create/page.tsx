import Button from "@/components/atoms/button";
import ContactUsForm from "@/components/molecules/ContactUsForm";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <section className="flex flex-col gap-5 items-center p-6 md:p-20 lg:p-36 text-white bg-secondary">
      <h4 className="text-primary text-lg md:text-2xl">Create Account</h4>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-medium md:font-semibold lg:font-extrabold">
        Create Your Crest Capital Account: Start Your Banking Journey Today
      </h1>
      <Image src="/logo.svg" alt="logo" width={50} height={50} className="cursor-pointer active:scale-95 transition-all"/>
    </section>
  );
};

export default LoginPage;
