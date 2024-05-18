import React from "react";
import ContactUsForm from "../molecules/ContactUsForm";
import MiniContact from "../molecules/miniContact";

const ContactUsSection = ({
  title = "We are happy to discuss your portfolio & answer any question",
}: {
  title?: string;
}) => {
  return (
    <section className="flex flex-col gap-5 items-center p-6 md:p-20 lg:p-36 text-white">
      <h4 className="text-primary md:text-lg">Send us an Email Today</h4>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-medium md:font-semibold lg:font-extrabold">
        {title}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <ContactUsForm />
        <div className="w-full flex items-center justify-center">
          <div className="border border-solid border-tertiary p-4 md:p-6 lg:p-8 rounded-xl w-full lg:w-3/4 lg:h-3/4 flex flex-col justify-center gap-2">
            <MiniContact
              icon="/icons/location.svg"
              title="Address:"
              subtitle="East Thames Plaza,Ripple Rd, Dagenham RM9 6UQ, United Kingdom"
            />
            <MiniContact
              icon="/icons/call.svg"
              title="Phone:"
              subtitle="+44 7441 393510"
            />
            <MiniContact
              icon="/icons/clock.svg"
              title="We are open:"
              subtitle="Monday - Saturday: 9:00 AM - 6:00 PM"
            />
            <MiniContact
              icon="/icons/sendmail.svg"
              title="Email:"
              subtitle="Crestcapital@info.google.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
