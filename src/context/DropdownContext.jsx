"use client";

import { createContext, useState } from "react";

const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState({
    year: null,
    genre: null,
    voteAvg: null,
  });

  return (
    <DropdownContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </DropdownContext.Provider>
  );
};

export default DropdownContext;
