import Button from "@/components/atoms/button";
import ContactUsForm from "@/components/molecules/ContactUsForm";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <section className="flex flex-col gap-5 items-center p-6 md:p-20 lg:p-36 text-white bg-secondary">
      <h4 className="text-primary text-lg md:text-2xl">Login</h4>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-medium md:font-semibold lg:font-extrabold">
        Login to Crest Capital: Secure Access to Your Accounts
      </h1>
      <div className="w-full lg:w-3/4 lg:h-3/4">
        <form
          //   onSubmit={handleSubmit}
          className="py-6 gap-2 w-full text-sm text-white rounded-2xl md:p-7 p-2 flex flex-col"
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            placeholder="email address"
            required
            className="bg-transparent border outline-none border-tertiary rounded-lg text-xs p-3"
          />

          <label htmlFor="name">Password</label>
          <input
            type="text"
            name="Password"
            id="name"
            // value={formData.Password}
            required
            // onChange={handleChange}
            placeholder="Password"
            className="bg-transparent outline-none border border-tertiary  rounded-lg text-xs p-3"
          />
         <Button text="Login" href="/login"/>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
