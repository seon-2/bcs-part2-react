import { Box } from "@chakra-ui/react";
import B from "./B";

function A() {
  return (
    // 빈 태그는 사실 Fragment
    <> 
      <Box w={100} h={100} bgColor="red.500">
        A
      </Box>
      <B />
    </>
  );
}

export default A;
