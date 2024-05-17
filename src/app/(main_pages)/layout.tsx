"use client";

import Header from "@/components/layouts/header";
import { AppContextProvider } from "@/contexts/main_context";
import SideBar from "@/components/layouts/sidebar";
import Footer from "@/components/sections/footer";
import { useEffect, useState } from "react";
import Loader from "@/components/atoms/loading";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    // Set a timer to clear the event listener if the load event hasn't fired after 3 seconds
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Cleanup function to remove event listener and clear timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <AppContextProvider>
          <Header />
          <SideBar />
          <div className="pt-[76px]">{children}</div>
          <div className="bg-secondary">
            <Footer />
          </div>
        </AppContextProvider>
      )}
    </>
  );
};
export default Layout;
