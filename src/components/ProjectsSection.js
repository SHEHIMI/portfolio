import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Pcard from "./Card";

const projects = [
  {
    title: "HealthFlow",
    description:
      "A cutting-edge, cloud-based medical software for private clinics using Django and React, aimed at revolutionizing patient care, streamlining operations, enhancing data security, and improving the healthcare experience.",
    getImageSrc: () => require("../images/hflow.png"),
    link: "https://healthflowonline.com",
  },
  {
    title: "SWLancer website",
    description:
      "A Complete Website for the startup SWLancer built with React and openAI GPT for the integrated customer support chatbot",
    getImageSrc: () => require("../images/swlancer.png"),
    link: "https://swlancer.com",
  },
  {
    title: "SCP Infection (Unreal Engine)",
    description:
      "Luke receives an unusual message from his work boss while on vacation. Downloading a document from his work emails puts a target on his back. Will Luke survive his misadventure or will he doom the world and himself?",
    getImageSrc: () => require("../images/scp.png"),
    link: "https://omarlawand.itch.io/scp-infection",
  },
  {
    title: "BC Tailored Homes website",
    description:
      "BC Tailored Homes website for a contracting company based in the heart of Vancouver, Built with Wordpress and hosted using Hostinger",
    getImageSrc: () => require("../images/bct.png"),
    link: "https://bctailoredhomes.ca",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor=""
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" color={"blackAlpha.800"}>
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{
          base: "1fr", // On mobile (base), use 1 column
          md: "repeat(2, minmax(0, 1fr))", // On medium and larger screens, use 2 columns
        }}
        gridGap={8}
      >
        {projects.map((project) => (
          <Pcard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
