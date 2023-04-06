import { Box, ChakraProvider } from "@chakra-ui/react";
import A from "./components/A";

function App() {
  return (
    <ChakraProvider>
      <Box>Hello, React</Box>
      <A />
    </ChakraProvider>
  );
}

export default App;
