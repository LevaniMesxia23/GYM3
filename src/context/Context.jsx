import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

const defaultContextValues = {
  isOpen: false,
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {}
};

export const Mycontext = createContext(defaultContextValues);

export const MyProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");
  const isTablet = useMediaQuery("only screen and (min-width : 769px)")

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    console.log("rame");
  }
  return (
    <Mycontext.Provider value={{isOpen, setIsOpen, isDesktop,isTablet, openModal, closeModal, isModalOpen}}>
      {children}
    </Mycontext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired
}
