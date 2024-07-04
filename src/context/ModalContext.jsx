
import React, { createContext, useContext, useState, useCallback } from 'react';
import QrCodeDownloadModal from '@/components/QrCodeScanModal/QrCodeDownloadModal';

const ModalContext = createContext();

export const useQrModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      <QrCodeDownloadModal isOpen={isOpen} onClose={closeModal} />
      {children}
    </ModalContext.Provider>
  );
};
