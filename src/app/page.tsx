"use client";

import IntroBanner from "./components/client/IntroBanner";
import {Box, Flex} from "@chakra-ui/react";
import SkillsBanner from "./components/client/SkillsBanner";

export default function Home() {
    return (
        <>
            {/* <Flex align="center" justify="center" height="100vh"></Flex> */}
            <Flex align="center" justify="center">
                <Box width="80%">
                    <IntroBanner/>
                </Box>
            </Flex>
            <br/>
            <br/>
            <Flex align="center" justify="center">
                <Box width="80%">
                    <SkillsBanner/>
                </Box>
            </Flex>
        </>
    )
}
