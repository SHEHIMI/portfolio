import React from "react";
import { Avatar, Heading, useBreakpointValue, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import "../styles/Landing.css";
import picture from "../images/avatar.jpg";

const greeting = "Hello, My name is Mohamad!";
const bio1 = "Full-Stack Software Engineer";

const LandingSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <div className="container">
      <div className="gradient"></div>
      <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
      >
        <Avatar size="xl" name="Pete" src={picture} />
        <Heading
          as="h6"
          fontSize="xs"
          fontWeight="bold"
          mb={4}
          textAlign={"center"}
          color={"blackAlpha.800"}
        >
          {greeting}
        </Heading>
        <VStack spacing={4} color={"blackAlpha.800"}>
          <Heading
            as="h1"
            fontSize={isMobile ? "3xl" : "5xl"}
            fontWeight="semibold"
            textAlign={"center"}
          >
            {bio1}
          </Heading>
          {/* <Heading
            as="h1"
            fontSize={isMobile ? "3xl" : "5xl"}
            fontWeight="semibold"
            textAlign={"center"}
          >
            {bio2}
          </Heading> */}
        </VStack>
      </FullScreenSection>
    </div>
  );
};

export default LandingSection;
