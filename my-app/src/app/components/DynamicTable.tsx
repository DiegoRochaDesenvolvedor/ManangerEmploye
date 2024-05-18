"use client"; 
import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Button, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react"
import PutModal from './PutModal'
import DeleteModal from './DeleteModal'
import filterById from '../scripts/helpers/filterById';

interface DynamicTableProps {
  color: string;
  data: any;
}

const DynamicTable: React.FC<DynamicTableProps> = ({ color, data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataResolved, setDataResolved] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const { isOpen: isDeleteModalOpen, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      const result = await data;
      setDataResolved(result);
    };
    

    fetchData();
  }, [data]);


  function handleDelete(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <ChakraProvider>
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th textAlign="center">Nome</Th>
        <Th textAlign="center">Posição</Th>
        <Th textAlign="center">Email</Th>
        <Th textAlign="center">Ações</Th>
      </Tr>
    </Thead>
    <Tbody>
    {dataResolved && dataResolved.map((row, index) => (
        <Tr key={index}>
          <Td textAlign="center">{row.name}</Td>
          <Td textAlign="center">{row.position}</Td>
          <Td textAlign="center">{row.email}</Td>
          <Td textAlign="center">
            <Button colorScheme="purple" size="sm" onClick={() => { setSelectedId(row._id.toString()); onOpen(); }}>Atualizar</Button>
            <Button colorScheme="gray" size="sm" marginLeft="10px" onClick={() => { setSelectedId(row._id.toString()); onOpenDeleteModal(); }}>Deletar</Button>
            <PutModal isOpen={isOpen} onClose={onClose} id={selectedId} data={filterById(dataResolved,selectedId)}/>
            <DeleteModal isOpen={isDeleteModalOpen} onClose={onCloseDeleteModal} id={selectedId} />
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
 
</ChakraProvider>

  );
};

export default DynamicTable;