import React, { useState, useEffect } from 'react';
import { FormLabel, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Controller from '../scripts/helpers/Controller';

interface PutModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  data: { name: string; position: string; email: string; };
}

const PutModal: React.FC<PutModalProps> = ({ isOpen, onClose, id, data }) => {
  const [name, setName] = useState('');
  const [functionValue, setFunctionValue] = useState('');
  const [email, setEmail] = useState('');
  const [, forceUpdate] = useState();

  useEffect(() => {
    if (isOpen && data) {
      setName(data.name);
      setFunctionValue(data.position);
      setEmail(data.email);
    }
  }, [isOpen, data]); 

  const handleUpdate = async () => {
    const updatedData = await Controller.putData(id, name, functionValue, email);
    setName(updatedData.name);
    setFunctionValue(updatedData.position);
    setEmail(updatedData.email);
    forceUpdate({});
  };

  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Atualizar dados</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormLabel>Nome</FormLabel>
          <Input value={name} onChange={e => setName(e.target.value)} />
          <FormLabel>Posição</FormLabel>
          <Input value={functionValue} onChange={e => setFunctionValue(e.target.value)} />
          <FormLabel>Email</FormLabel>
          <Input value={email} onChange={e => setEmail(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Fechar
          </Button>
          <Button variant="ghost" onClick={handleUpdate}>Atualizar</Button>        
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PutModal;