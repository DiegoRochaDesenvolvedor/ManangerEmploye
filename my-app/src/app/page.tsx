import React from 'react';
import DynamicTable from './components/DynamicTable';
import { Box, Flex, Text } from "@chakra-ui/react";

const getTableData = require('./scripts/helpers/getTableData').default;

const Page: React.FC = () => {
  const dataRequest = getTableData().then(data => data);
  return (
    <div>
      <Box bg="rgb(80, 255, 65)" w="100%" p={4} color="green">
        <Flex>
          <Text>Mananger</Text>
        </Flex>
      </Box>
      <DynamicTable color="red" data={dataRequest}/>
    </div>
  );
};

export default Page;