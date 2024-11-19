import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack backgroundColor={"#333333"} color={"white"}>
      <VStack maxWidth="1280px" minHeight="50vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
