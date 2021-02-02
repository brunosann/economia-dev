import React, { useState } from "react";
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <GlobalContext.Provider value={{ setModal, modal }}>
      {children}
    </GlobalContext.Provider>
  );
};
