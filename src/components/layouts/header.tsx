"use client";

import AppContext from "@/contexts/main_context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import Button from "../atoms/button";
import { usePathname } from "next/navigation";

export const links = [
  {
    name: "Services",
    route: "/services",
  },
  {
    name: "About Us",
    route: "/about",
  },
  {
    name: "Contact Us",
    route: "/contact",
  },
];

const Header = () => {
  const { navOpen, toggleNav } = useContext(AppContext);
  const pathname = usePathname();
  return (
    <header
      className={`fixed flex items-center justify-between w-full px-4  lg:px-28 h-[76px] border-b bg-white z-50`}
    >
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          width={90}
          height={90}
          className={`h-12 w-12 lg:h-14 lg:w-14 object-contain`}
          alt="Logo"
        />
      </Link>
      <div className="hidden lg:flex gap-8">
        {links.map((item, idx) => (
          <Link
            key={idx}
            href={item.route}
            className={`font-medium ${
              pathname === item.route && "text-primary font-bold"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="gap-6 hidden lg:flex">
        <Button text="Log in" href="/login" mode={2} />
        <Button text="Open Your Account" href="/create" />
      </div>
      <svg
        className={`lg:hidden cursor-pointer transition-all duration-300 ${navOpen ? "scale-[0.3]" : "active:scale-90"}`}
        onClick={toggleNav}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M17.54 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM8.92 5.85c0-1.36-1.1-2.46-2.46-2.46C5.1 3.39 4 4.49 4 5.85c0 1.36 1.1 2.46 2.46 2.46M17.54 20.62c1.36 0 2.46-1.1 2.46-2.46 0-1.36-1.1-2.46-2.46-2.46-1.36 0-2.46 1.1-2.46 2.46M6.46 20.611a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92Z"
          stroke="#FF8A65"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </header>
  );
};

export default Header;
