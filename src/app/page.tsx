"use client";

import AcademicBackground from "./components/client/AcademicBackground";
import ProfessionalExperience from "./components/client/ProfessionalExperience";
import ProfileIntroduction from "./components/client/ProfileIntroduction";
import {Box, Flex} from "@chakra-ui/react";
import Projects from "./components/client/Projects";
import Blogs from "./components/client/Blogs";

export default function Home() {
    return (
        <>
            <Flex align="center" justify="center" marginY={10}>
                <Box width={{ base: "95%", lg: "60%" }}>
                    <ProfileIntroduction />
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginY={10}>
                <Box width={{ base: "95%", lg: "60%" }}>
                    <ProfessionalExperience />
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginY={10}>
                <Box width={{ base: "95%", lg: "60%" }}>
                    <Projects />
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginY={10}>
                <Box width={{ base: "95%", lg: "60%" }}>
                    <Blogs />
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginY={10}>
                <Box width={{ base: "95%", lg: "60%" }}>
                    <AcademicBackground />
                </Box>
            </Flex>
        </>
    )
}
