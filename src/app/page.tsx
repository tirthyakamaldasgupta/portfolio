"use client";

import AcademicBackground from "./components/client/AcademicBackground";
import ProfessionalExperience from "./components/client/ProfessionalExperience";
import ProfileIntroduction from "./components/client/ProfileIntroduction";
import {Box, Flex} from "@chakra-ui/react";
import Projects from "./components/client/Projects";
import Blogs from "./components/client/Blogs";
import Connect from "./components/client/Connect";
import Footer from "./components/client/Footer";
import Navbar from "./components/client/Navbar";
import NewNavbar from "./components/client/NewNavbar";

export default function Home() {
    return (
        <>
            {/* <Flex align="center" justify="center" marginY={10}>
                <Box width={{base: "95%", lg: "70%"}}>
                    <Navbar/>
                </Box>
            </Flex> */}
            <Flex>
                <Box width={{base: "95%", lg: "70%"}}>
                    <NewNavbar/>
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginTop={120} marginBottom={10}>
                <Box width={{base: "95%", lg: "70%"}}>
                    <ProfileIntroduction/>
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginY={10}>
                <Box width={{base: "95%", lg: "70%"}}>
                    <ProfessionalExperience/>
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginY={10}>
                <Box width={{base: "95%", lg: "70%"}}>
                    <Projects/>
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginY={10}>
                <Box width={{base: "95%", lg: "70%"}}>
                    <AcademicBackground/>
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginY={10}>
                <Box width={{base: "95%", lg: "70%"}}>
                    <Blogs/>
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginY={10}>
                <Box width={{base: "95%", lg: "70%"}}>
                    <Connect/>
                </Box>
            </Flex>
            <Flex align="center" justify="center" marginTop={20} marginBottom={10}>
                <Box width={{base: "95%", lg: "70%"}}>
                    <Footer/>
                </Box>
            </Flex>
        </>
    )
}
