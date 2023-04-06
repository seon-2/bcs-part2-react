import { ChakraProvider, Box, Button } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box color="red.400">Hello, chakra-ui!</Box>
      <Button colorScheme="cyan">버 튼</Button>
    </ChakraProvider>
  );
}

export default App;
