import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import logo from "../../../public/logo.svg";
//Import Needed Components
import Form from "@/components/AuthComponents/Form";

const page = () => {
  return (
    <main className="h-screen lg:flex">
      <div className="flex h-full flex-col px-6 sm:px-8 md:px-10 lg:w-2/3 lg:px-12 xl:px-14 2xl:px-16 overflow-y-scroll">
        <Link href="/" className="flex gap-x-1 mt-4">
          <Image
            src={logo}
            alt="Prime Peak Bank Logo"
            priority={true}
            className="size-9 sm:size-12 xl:size-14"
          />
          <div className="text-[#1C1F33] font-semibold text-xs sm:text-sm xl:text-base">
            <p>Prime Peak</p>
            <p className="-mt-[0.3rem]">Bank</p>
          </div>
        </Link>
        <div className="text-[#161618] mt-10">
          <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
            Set up your account
          </p>
          <p className="text-xs sm:text-sm xl:text-base font-semibold mt-4">
            Welcome, let&apos;s get started
          </p>
        </div>
        <Form />
      </div>
      <div className="createBackground hidden lg:flex lg:w-1/3 justify-center items-center">
        <Image
          src={logo}
          alt="Prime Peak Bank Logo"
          priority={true}
          className="size-32 rounded-full"
        />
      </div>
    </main>
  );
};

export default page;
