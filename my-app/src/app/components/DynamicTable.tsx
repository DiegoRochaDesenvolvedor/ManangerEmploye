"use client"; 
import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Button, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react"
import PutModal from './PutModal'
import DeleteModal from './DeleteModal'

interface DynamicTableProps {
  color: string;
  data: any;
}
interface RowData {
  name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
  position: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
  departament: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
  _id?: any;}
const DynamicTable: React.FC<DynamicTableProps> = ({ color, data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataResolved, setDataResolved] = useState<RowData[]>([]);  const [selectedId, setSelectedId] = useState(null);
  const { isOpen: isDeleteModalOpen, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      const result = await data;
      setDataResolved(result);
    };
    
    fetchData();
  }, [data]);

  return (
    <ChakraProvider>
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th textAlign="center">Nome</Th>
        <Th textAlign="center">Cargo</Th>
        <Th textAlign="center">Departamento</Th>
        <Th textAlign="center">Ações</Th>
      </Tr>
    </Thead>
    <Tbody>
      {dataResolved && Array.isArray(dataResolved) && dataResolved.map((row: RowData, index: number) => (
        <Tr key={index}>
          <Td textAlign="center">{row.name}</Td>
          <Td textAlign="center">{row.position}</Td>
          <Td textAlign="center">{row.departament}</Td>
          <Td textAlign="center">
            <Button colorScheme="purple" size="sm" onClick={() => { setSelectedId(row._id.toString()); onOpen(); }}>Atualizar</Button>
            <Button colorScheme="gray" size="sm" marginLeft="10px" onClick={() => { setSelectedId(row._id.toString()); onOpenDeleteModal(); }}>Deletar</Button>
            <PutModal 
              isOpen={isOpen} 
              onClose={onClose} 
              id={row?._id?.toString() ?? ''} 
             />
            <DeleteModal 
              isOpen={isDeleteModalOpen} 
              onClose={onCloseDeleteModal} 
              id={row?._id?.toString() ?? ''} 
            />
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
 
</ChakraProvider>

  );
};

export default DynamicTable;