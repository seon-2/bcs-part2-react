import {
  ChakraProvider,
  Button,
  useDisclosure,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        <Button onClick={onOpen}>Open</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>What's up!</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={20}>안녕하세요!</ModalBody>
            <ModalFooter>
              <Button mr={4} onClick={onClose}>
                닫기
              </Button>
              Designed by, seon
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
