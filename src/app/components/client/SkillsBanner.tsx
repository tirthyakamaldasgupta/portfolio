import {Badge, Box, Button, Flex, Heading, Image, SimpleGrid, Text} from "@chakra-ui/react";

export default function SkillsBanner() {
    const skills = ["Python", "Java", "C++", "C#", "Javascript", "React", "NodeJS", "HTML", "CSS", "SQL", "MongoDB", "AWS", "Git", "Linux", "C", "C++", "C#", "Java", "Python", "Javascript"];

    const downloadResume = () => {
        const link = document.createElement("a");

        link.href = "Tirthya-Kamal-Dasgupta-Resume.pdf";

        link.download = "Tirthya-Kamal-Dasgupta-Resume.pdf";

        link.click();
    };

    return (
        <SimpleGrid columns={[1, 2]} spacing={4} padding={4}>
            <Box>
                <Image src="collaboration-artwork.jpg" alt="Tirthya Kamal Dasgupta" width={500} height={"auto"}
                       borderRadius={20}/>
            </Box>
            <Flex align="center" justify="center">
                <Box>
                    <Box marginY={5}>
                        <Heading size="xl" fontWeight={"semibold"}>
                            About me
                        </Heading>
                    </Box>
                    <Box>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </Box>
                    <Box marginY={5}>
                        <Heading size="md" fontWeight={"semibold"}>
                            Skills
                        </Heading>
                    </Box>
                    <Box marginY={5}>
                        {skills.map((skill, index) => (
                            <Badge key={index} variant={"subtle"} fontSize={"md"} borderRadius={5} padding={2}
                                   color={"inherit"} backgroundColor={"#6B728E"} textTransform={"capitalize"}
                                   marginRight={3} marginBottom={3}>
                                {skill}
                            </Badge>
                        ))}
                    </Box>
                    <Button backgroundImage={"linear-gradient(315deg, #20bf55 0%, #01baef 74%)"}
                            backgroundColor={"#20bf55"} color={"#ffffff"} size={"lg"} opacity={0.9} borderRadius={8}
                            _hover={{
                                backgroundImage: "linear-gradient(315deg, #20bf55 0%, #01baef 74%)",
                                backgroundColor: "#20bf55",
                                opacity: 1
                            }} onClick={downloadResume}>
                        Download resume
                    </Button>
                </Box>
            </Flex>
        </SimpleGrid>
    )
}
