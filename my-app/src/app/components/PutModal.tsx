import React, { useEffect } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";

interface PutModal {
  isOpen: boolean;
  onClose: () => void;
  id:string;
}

const PutModal: React.FC<PutModal> = ({ isOpen, onClose, id }) => {
    useEffect(() => {
        if (isOpen) {
          console.log('id---', id);
        }
      }, [isOpen]);
    
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          // Seu conteúdo aqui
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PutModal;