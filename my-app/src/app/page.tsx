"use client"; 
import React, { useState } from 'react';
import DynamicTable from './components/DynamicTable';
import { ChakraProvider, Button, Box, Flex, Text } from "@chakra-ui/react";
import CreateModal from './components/CreateModal';

const getTableData = require('./scripts/helpers/getTableData').default;

const Page: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dataRequest = getTableData().then(data => data);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <ChakraProvider>
        <Box bg="rgb(80, 255, 65)" w="100%" p={4} color="green">
          <Flex>
            <Text>Mananger</Text>
          </Flex>
        </Box>
        <Box w="100%" p={4} color="green">
          <Flex>
            <Button colorScheme="green" size="sm" marginLeft="10px" onClick={handleOpen}>Adicionar</Button>
          </Flex>
        </Box>
        <DynamicTable color="red" data={dataRequest}/>
        <CreateModal isOpen={isOpen} onClose={handleClose} />
      </ChakraProvider>
    </div>
  );
};

export default Page;