import {
  ChakraProvider,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider
} from "@chakra-ui/react";
import { PhoneIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ChakraProvider>
      <Box color="red.400">Hello, chakra-ui!</Box>
      {/* variant : 변형 스타일*/}
      <Button
        isLoading={isLoading}
        colorScheme="cyan"
        leftIcon={<PhoneIcon />}
        variant="outline"
      >
        버 튼
      </Button>
      <Menu>
        <MenuButton
          colorScheme="teal"
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          저녁 메뉴
        </MenuButton>
        <MenuList>
          <MenuGroup title="파스타">
            <MenuItem>알리오올리오</MenuItem>
            <MenuItem>크림파스타</MenuItem>
            <MenuItem>토마토파스타</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="치킨">
            <MenuItem>양념치킨</MenuItem>
            <MenuItem>후라이드</MenuItem>
            <MenuItem>구운치킨</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="피자">
            <MenuItem>파인애플피자</MenuItem>
            <MenuItem>페퍼로니피자</MenuItem>
            <MenuItem>치즈피자</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </ChakraProvider>
  );
}

export default App;
