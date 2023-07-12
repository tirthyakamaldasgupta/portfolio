"use client";

import AcademicBackground from "./components/client/AcademicBackground";
import ProfessionalExperience from "./components/client/ProfessionalExperience";
import ProfileIntroduction from "./components/client/ProfileIntroduction";
import {Box, Flex} from "@chakra-ui/react";
import Projects from "./components/client/Projects";

export default function Home() {
    return (
        <>
            <Flex align="center" justify="center" marginY={10}>
                <Box width="60%">
                    <ProfileIntroduction />
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginY={10}>
                <Box width="60%">
                    <ProfessionalExperience />
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginY={10}>
                <Box width="60%">
                    <Projects />
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginY={10}>
                <Box width="60%">
                    <AcademicBackground />
                </Box>
            </Flex>
        </>
    )
}
