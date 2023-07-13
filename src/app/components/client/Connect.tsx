import { Box, Button, Card, CardBody, CardHeader, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Heading, Input, Link, SimpleGrid, Stack, Tag, TagCloseButton, TagLabel, Text, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import { faLinkedin, faMedium, faHashnode, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faL, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { isError } from "util";

export default function Connect() {
    const isMaxScreen = useBreakpointValue({ base: true, md: true, lg: true, xl: false });

    const socialAccounts = [
        {
            icon: faLinkedin,
            color: "#0a66c2",
            link: "https://www.linkedin.com/in/tirthya-kamal-dasgupta/"
        },
        {
            icon: faMedium,
            color: "#ffffff",
            link: "https://medium.com/@tirthyakamaldasgupta12"
        },
        {
            icon: faHashnode,
            color: "#2962FF",
            link: "https://tirthya-kamal-dasgupta.hashnode.dev/"
        },
        {
            icon: faGithub,
            color: "#ffffff",
            link: "https://github.com/tirthyakamaldasgupta"
        },
        {
            icon: faYoutube,
            color: "#ff0000",
            link: "https://www.youtube.com/channel/UCnESi7g2P7lhhJ1Jy36SuqA"
        }
    ];

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [companyName, setCompanyName] = useState("");
    // const [message, setMessage] = useState("");

    // const handleFirstNameChange = (e: { target: { value: SetStateAction<string>; }; }) => setFirstName(e.target.value);
    // const handleLastNameChange = (e: { target: { value: SetStateAction<string>; }; }) => setLastName(e.target.value);
    // const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value);
    // const handleCompanyNameChange = (e: { target: { value: SetStateAction<string>; }; }) => setCompanyName(e.target.value);
    // const handleMessageChange = (e: { target: { value: SetStateAction<string>; }; }) => setMessage(e.target.value);

    // const isFirstNameError = input === ''

    return (
        <>
            <SimpleGrid columns={[1, 2]} spacing={1} padding={4}>
                <Box>
                    <Heading size="md" color="#ffffff">CONNECT WITH ME</Heading>
                </Box>
            </SimpleGrid>

            <SimpleGrid columns={[1, 2]} spacing={10} padding={4}>
                <Box>
                    <Heading size={"sm"} marginBottom={5}>Drop me an email on</Heading>
                    <Flex direction={isMaxScreen ? "column" : "row"} flexWrap={isMaxScreen ? "wrap" : "nowrap"}>
                        <Flex direction="column" marginRight={!isMaxScreen ? 2 : 0} marginBottom={isMaxScreen ? 2 : 0}>
                            <Button as={Link} href="mailto:dasguptatirthyakamal@gmail.com" width={isMaxScreen ? "100%" : "auto"} colorScheme="red" textDecoration={"none"} _hover={{ textDecoration: "none" }}>dasguptatirthyakamal@gmail.com</Button>
                        </Flex>
                        <Flex direction="column" marginRight={!isMaxScreen ? 2 : 0} marginBottom={isMaxScreen ? 2 : 0}>
                            <Button as={Link} href="mailto:dasguptatirthyakamal@outlook.com" width={isMaxScreen ? "100%" : "auto"} colorScheme="blue" textDecoration={"none"} _hover={{ textDecoration: "none" }}>dasguptatirthyakamal@outlook.com</Button>
                        </Flex>
                    </Flex>

                    <Heading size={"sm"} marginY={5}>Call or WhatsApp me on</Heading>
                    <Flex direction={isMaxScreen ? "column" : "row"} flexWrap={isMaxScreen ? "wrap" : "nowrap"}>
                        <Flex direction="column" marginRight={!isMaxScreen ? 2 : 0} marginBottom={isMaxScreen ? 2 : 0}>
                            <Button as={Link}
                                href="tel:+8240603916" width={isMaxScreen ? "100%" : "auto"} colorScheme="green" textDecoration="none" _hover={{ textDecoration: "none" }} >
                                +8240603916
                            </Button>
                        </Flex>
                        <Flex direction="column" marginRight={!isMaxScreen ? 2 : 0} marginBottom={isMaxScreen ? 2 : 0}>
                            <Button as={Link} href="tel:+8017352824" width={isMaxScreen ? "100%" : "auto"} colorScheme="green" textDecoration="none" _hover={{ textDecoration: "none" }} >
                                +8017352824
                            </Button>
                        </Flex>
                    </Flex>

                    <HStack wrap={isMaxScreen ? "wrap" : "nowrap"} align="center" spacing={2}>
                        <Heading size={isMaxScreen ? "xs" : "sm"} marginY={5}>
                            If you live nearby, we can always sit over a cup of
                        </Heading>
                        <Image src="/coffee-cup.png" alt="Coffee cup image" width={20} height={20} />
                        <Heading size={isMaxScreen ? "xs" : "sm"} marginY={5}>
                            at
                        </Heading>
                    </HStack>

                    <Text>Block B and C, New Tollygunge, Aurobindo Park, South Kolkata, West Bengal 700093</Text>

                    <Heading size={"sm"} marginY={5}>You might see me on</Heading>

                    {socialAccounts.map((socialAccount, index) => (
                        <Link href={socialAccount.link} key={index} isExternal marginRight={3}>
                            <FontAwesomeIcon icon={socialAccount.icon} size="2xl" color={socialAccount.color} />
                        </Link>
                    ))}
                </Box>

                <Box>
                    <FormControl isRequired paddingBottom={4}>
                        <Input type="text" variant="flushed" placeholder="First name *" _placeholder={{ color: "inherit", fontWeight: "bold" }} />
                    </FormControl>
                    <FormControl isRequired paddingBottom={4}>
                        <Input type="text" variant="flushed" placeholder="Last name *" _placeholder={{ color: "inherit", fontWeight: "bold" }} />
                    </FormControl>
                    <FormControl isRequired paddingBottom={4}>
                        <Input type="email" variant="flushed" placeholder="Email *" _placeholder={{ color: "inherit", fontWeight: "bold" }} />
                    </FormControl>
                    <FormControl paddingBottom={4}>
                        <Input type="text" variant="flushed" placeholder="Company" _placeholder={{ color: "inherit", fontWeight: "bold" }} />
                    </FormControl>
                    <FormControl isRequired paddingBottom={4}>
                        <Input type="text" variant="flushed" placeholder="Message *" _placeholder={{ color: "inherit", fontWeight: "bold" }} />
                    </FormControl>
                    <FormControl paddingBottom={4}>
                        <Button type="button"><Text>Submit enquiry</Text><FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "5px" }} /></Button>
                    </FormControl>
                </Box>
            </SimpleGrid>
        </>
    )
}
