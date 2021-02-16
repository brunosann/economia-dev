import React, { useState } from "react";
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [aside, setAside] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <GlobalContext.Provider value={{ setAside, aside, modal, setModal }}>
      {children}
    </GlobalContext.Provider>
  );
};
