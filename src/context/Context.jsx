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
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null); 
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");
  const isTablet = useMediaQuery("only screen and (min-width : 769px)")
  const isMobile = useMediaQuery("only screen and (max-width : 550px)")
  const isSmallResponsive = useMediaQuery("only screen and (min-width : 368px)")

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setOpenEditModal(false)
  }
  return (
    <Mycontext.Provider value={{isOpen, setIsOpen, isDesktop,isTablet, openModal, closeModal, isModalOpen,selectedId, setSelectedId, openEditModal, setOpenEditModal,isSmallResponsive,isMobile}}>
      {children}
    </Mycontext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired
}
