import { ChakraProvider, Box, Button } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <ChakraProvider>
      <Box color="red.400">Hello, chakra-ui!</Box>
      <Button colorScheme="cyan" leftIcon={<PhoneIcon />}>
        버 튼
      </Button>
    </ChakraProvider>
  );
}

export default App;
