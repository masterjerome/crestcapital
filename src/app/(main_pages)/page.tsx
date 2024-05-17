import ContactUsSection from "@/components/sections/contactUsSection";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/homeHero";
import LearnMore from "@/components/sections/homeLearnMore";
import WhyUs from "@/components/sections/homeWhyUs";
import Prefooter from "@/components/sections/prefooter";

export default function Home() {
  return (
    <div className="bg-secondary">
      <Hero />
      <div className="p-6 md:p-20 lg:p-36 text-white">
        <WhyUs />
        <LearnMore
          image="/images/learn-1.svg"
          title="Super convenient online banking"
          desc=" You can view your account balances, transaction history, and
          statements, and even set up custom alerts to help you stay on top of
          your finances."
        />
        <LearnMore
          image="/images/learn-2.png"
          reverse
          title="Borderless Transfers for Global Connectivity"
          desc="Experience the power of seamless global transactions with our Borderless Transfer feature. We understand that your financial connections extend beyond borders, and our innovative service is designed to make international transfers effortless and efficient."
        />
        <LearnMore
          image="/images/learn-3.svg"
          title="Virtual or physical ⎯ it's your choice"
          desc="Whether you're at home, at work, or on the go, our online banking platform is accessible from your computer, tablet, or mobile device. With our mobile banking app, you can even deposit checks and manage your accounts on the go."
        />
      </div>
        <ContactUsSection title="Feel free to contact us if you have any questions" />
        <Prefooter />
    </div>
  );
}