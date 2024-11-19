import {
  Box,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
  CardFooter,
  Card,
  Button,
} from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { color } from "framer-motion";
import React from "react";

const cardStyle = {
  background: "rgba(255,255,255,0.5)",
  WebkitBackdropFilter: "blur(10px)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.25)",
  color: "white",
};

const Pcard = ({ title, description, imageSrc, link }) => {
  return (
    <VStack spacing={0}>
      <Card maxW="md" height={"32rem"} style={cardStyle}>
        <CardHeader
          style={{
            padding: 0,
            borderRadius: "5px",
          }}
        >
          <Image
            src={imageSrc}
            alt="Chakra UI"
            style={{
              borderRadius: "5px",
            }}
            mx="auto"
            height={{ base: "200px", md: "250px" }} // Adjust height for responsiveness
          />
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box ml={5}>
                <Heading size="md">{title}</Heading>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="whiteAlpha"
              aria-label="See menu"
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>{description}</Text>
        </CardBody>
        <CardFooter
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button
            flex="1"
            variant="ghost"
            rightIcon={<FontAwesomeIcon icon={faArrowRight} size="1x" />}
            onClick={() => {
              window.open(link, "_blank");
            }}
            color={"whiteAlpha.900"}
          >
            See more
          </Button>
        </CardFooter>
      </Card>
    </VStack>
  );
};

export default Pcard;
