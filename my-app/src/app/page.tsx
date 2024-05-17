import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Spinner } from "@chakra-ui/react";
import DynamicTable from './components/DynamicTable';
import './page.css'
export default function Page() {
    const data = [
        { id:1, Nome: 'João', Idade: 30, Posição: 'Engenheiro' },
        { id:2, Nome: 'Maria', Idade: 25, Posição: 'Designer' },
        // ...
      ];
    return (    
    <div className="content">
        <Box bg="rgb(177, 255, 59)" w="100%" h="40px" p={4} color="green">
            <Text bg="none" fontFamily="Arial" fontSize="2xl" mt="10px" fontWeight="bold">Employee Manager</Text>

        </Box>
        <DynamicTable color="black" data={data} />;
    </div>
    )
  }