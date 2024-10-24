import PropTypes from "prop-types";
import { createContext, useState } from "react";

const defaultContextValues = {
  isOpen: false,
  setIsOpen: () => {},
};

export const Mycontext = createContext(defaultContextValues);

export const MyProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Mycontext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </Mycontext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired
}
