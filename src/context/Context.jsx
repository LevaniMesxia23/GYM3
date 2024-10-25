import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

const defaultContextValues = {
  isOpen: false,
  setIsOpen: () => {},
};

export const Mycontext = createContext(defaultContextValues);

export const MyProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");
  const isTablet = useMediaQuery("only screen and (min-width : 769px)")
  return (
    <Mycontext.Provider value={{isOpen, setIsOpen, isDesktop,isTablet}}>
      {children}
    </Mycontext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired
}
