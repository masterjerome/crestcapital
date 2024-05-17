"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

type ContextType = {
  navOpen?: boolean;
  setNavOpen?: Dispatch<SetStateAction<boolean>>;
  toggleNav?: () => void;
};

export const AppContext = createContext<ContextType>({});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const values: ContextType = {
    navOpen,
    setNavOpen,
    toggleNav,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
