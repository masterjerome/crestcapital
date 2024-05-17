"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { links } from "./header";
import { usePathname } from "next/navigation";
import AppContext from "@/contexts/main_context";
import Button from "../atoms/button";

const SideBar = () => {
  const { navOpen, toggleNav } = useContext(AppContext);
  const pathname = usePathname();

  return (
    <aside
      className={`bg-white fixed top-0 ${
        navOpen ? "left-0" : "left-[-100%]"
      } border-r min-w-[250px] p-4 flex flex-col transition-all duration-500 h-screen overflow-y-auto lg:hidden !z-[9999]`}
    >
      <div className="flex flex-col gap-3 mt-20">
        <Link
          href={"/"}
          onClick={toggleNav}
          className={`font-medium ${
            pathname === "/" && "text-primary font-bold"
          }`}
        >
          Home
        </Link>
        {links.map((item, idx) => (
          <Link
            key={idx}
            href={item.route}
            onClick={toggleNav}
            className={`font-medium ${
              pathname === item.route && "text-primary font-bold"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <Button text="Log in" href="/login" mode={2} onClick={toggleNav} />
        <Button text="Open Your Account" href="/create" onClick={toggleNav} />
      </div>
    </aside>
  );
};

export default SideBar;
