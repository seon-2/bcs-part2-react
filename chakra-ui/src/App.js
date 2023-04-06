import { ChakraProvider, Box, Button } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <ChakraProvider>
      <Box color="red.400">Hello, chakra-ui!</Box>
      {/* variant : 변형 스타일*/}
      <Button colorScheme="cyan" leftIcon={<PhoneIcon />} variant="outline">
        버 튼
      </Button>
    </ChakraProvider>
  );
}

export default App;
