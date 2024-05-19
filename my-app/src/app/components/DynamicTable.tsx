import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Button, Table, Thead, Tbody, Tr, Th, Td, Input } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react"
import PutModal from './PutModal'
import DeleteModal from './DeleteModal'
import CreateModal from '../components/CreateModal';

interface DynamicTableProps {
  color: string;
  data: any;
}

interface RowData {
  name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
  position: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
  departament: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
  _id?: any;
}

const DynamicTable: React.FC<DynamicTableProps> = ({ color, data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataResolved, setDataResolved] = useState<RowData[]>([]);
  const [selectedId, setSelectedId] = useState(null);
  const { isOpen: isDeleteModalOpen, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal } = useDisclosure();
  const { isOpen: isCreateModalOpen, onOpen: onCreateModalOpen, onClose: onCloseCreateModal } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await data;
      setDataResolved(result);
    };
    
    fetchData();
  }, [data]);

  const filteredData = dataResolved.filter((row: RowData) => {
    const name = row.name?.toString() ?? '';
    const position = row.position?.toString() ?? '';
    const departament = row.departament?.toString() ?? '';
    const searchTermLower = searchTerm.toLowerCase();
    return (
      name.toLowerCase().includes(searchTermLower) ||
      position.toLowerCase().includes(searchTermLower) ||
      departament.toLowerCase().includes(searchTermLower)
    );
  });

  const sortedData = filteredData.sort((a, b) => {
    if (sortDirection === 'asc') {
      return (a.name?.toString() ?? '').localeCompare(b.name?.toString() ?? '');
    } else {
      return (b.name?.toString() ?? '').localeCompare(a.name?.toString() ?? '');
    }
  });

  return (
    
      <div style={{ width: '80vw', margin: 'auto', background:"rgb(255, 255, 255)"}}>
      <ChakraProvider>
      <Input 
        placeholder="Pesquisar" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)}
        bg="white"
        color="black"
        borderColor="purple.500"
        focusBorderColor="purple.700"
        borderRadius="md"
        marginBottom="10px"
        marginLeft="10px"
        marginRight="10px"
        width="20%"
        size="sm"
        _hover={{ borderColor: "purple.700" }}
      />      

      <Button colorScheme="green" size="sm" marginLeft="10px" onClick={onCreateModalOpen}>Adicionar</Button>
      <Button float="right"marginRight="10px" size="sm" onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}>
        {sortDirection === 'asc' ? 'Z-A' : 'A-Z'}
      </Button> 
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
          {sortedData && Array.isArray(sortedData) && sortedData.map((row: RowData, index: number) => (
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
      <CreateModal 
                isOpen={isCreateModalOpen} 
                onClose={onCloseCreateModal} 
      />
    </ChakraProvider>
    </div>
  );
};

export default DynamicTable;