import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  VStack,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import "../styles/Header.css";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:mshehim95i@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/SHEHIMI",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/mohamad-s-627b2220a/",
  },
  {
    icon: faPhone,
    url: "tel:+96181600482",
  },
];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) {
        // Scrolling down
        setHeaderVisible(false);
      } else {
        // Scrolling up
        setHeaderVisible(true);
      }
      setPrevScrollY(window.scrollY); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener
    };
  }, [prevScrollY]);

  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="10"
      width={"auto"}
      transform={headerVisible ? "translateY(0)" : "translateY(-100%)"}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={{ base: 4, md: 16 }}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {isMobile ? (
            // Mobile: Show drawer toggle button
            <>
              <IconButton
                icon={<FontAwesomeIcon icon={faBars} size="lg" />}
                variant="ghost"
                colorScheme="whiteAlpha"
                onClick={onOpen}
                aria-label="Open Menu"
              />
              <Text fontSize={"md"} color={"white"} fontWeight={"bold"}>
                MS
              </Text>
            </>
          ) : (
            <>
              <HStack spacing={4}>
                {socials.map((social, index) => (
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                    key={index}
                  >
                    <FontAwesomeIcon icon={social.icon} size={"lg"} />
                  </a>
                ))}
              </HStack>
              <HStack spacing={8}>
                <Button
                  fontSize={"sm"}
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  onClick={() => handleClick("projects")}
                >
                  Projects
                </Button>
                <Button
                  fontSize={"sm"}
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  onClick={() => handleClick("contactme")}
                >
                  Contact Me
                </Button>
              </HStack>
            </>
          )}
        </HStack>
      </Box>
      {isMobile && (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent backgroundColor="#18181b" color="white">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="flex-start">
                {socials.map((social, index) => (
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                    key={index}
                  >
                    <FontAwesomeIcon icon={social.icon} size={"lg"} />
                  </a>
                ))}
                <Button
                  fontSize={"sm"}
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  onClick={() => {
                    handleClick("projects");
                    onClose();
                  }}
                >
                  Projects
                </Button>
                <Button
                  fontSize={"sm"}
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  onClick={() => {
                    handleClick("contactme");
                    onClose();
                  }}
                >
                  Contact Me
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </Box>
  );
};

export default Header;
