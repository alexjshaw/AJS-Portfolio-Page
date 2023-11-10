import React, { createContext, useState, useContext } from 'react';
import { links } from '../assets/data/NavLinks';

const ActiveLinkContext = createContext();

export const useActiveLink = () => useContext(ActiveLinkContext);

export const ActiveLinkProvider = ({ children }) => {
  const [active, setActive] = useState(links[0].link);

  return (
    <ActiveLinkContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};
