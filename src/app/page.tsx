"use client";

import ProfessionalExperience from "./components/client/ProfessionalExperience";
import ProfileIntroduction from "./components/client/ProfileIntroduction";
import {Box, Flex} from "@chakra-ui/react";

export default function Home() {
    return (
        <>
            <Flex align="center" justify="center" marginY={10}>
                <Box width="60%">
                    <ProfileIntroduction/>
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginY={10}>
                <Box width="60%">
                    <ProfessionalExperience/>
                </Box>
            </Flex>
        </>
    )
}
