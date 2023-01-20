import { createContext, useState } from 'react';

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState({
    welcomModal: false,
    thanksModal: false,
    formModal: false,
    newModal: false,
  });
  const toggle = () => setModalOpen(!modalOpen);

  return (
    <ModalContext.Provider value={{ setModalOpen, modalOpen, toggle }}>
      {children}
    </ModalContext.Provider>
  );
};
