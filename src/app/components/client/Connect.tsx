import { Box, Button, Card, CardBody, CardHeader, HStack, Heading, Link, SimpleGrid, Tag, TagCloseButton, TagLabel, Text } from "@chakra-ui/react";
import { faLinkedin, faMedium, faHashnode, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Connect() {
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
                    <Button as={Link} href="mailto:dasguptatirthyakamal@gmail.com" marginRight={2} colorScheme="red" textDecoration={"none"} _hover={{ textDecoration: "none" }}>dasguptatirthyakamal@gmail.com</Button>
                    <Button as={Link} href="mailto:dasguptatirthyakamal@outlook.com" marginRight={2} colorScheme="blue" textDecoration={"none"} _hover={{ textDecoration: "none" }}>dasguptatirthyakamal@outlook.com</Button>

                    <Heading size={"sm"} marginY={5}>Call or WhatsApp me on</Heading>
                    <Button as={Link} href="tel:+8240603916" marginRight={2} colorScheme="green" textDecoration={"none"} _hover={{ textDecoration: "none" }}>+8240603916</Button>
                    <Button as={Link} href="tel:+8017352824" marginRight={2} colorScheme="green" textDecoration={"none"} _hover={{ textDecoration: "none" }}>+8017352824</Button>

                    <HStack>
                        <Heading size={"sm"} marginY={5}>If you live nearby, we can always sit over a cup of</Heading>
                        <Image src={"/coffee-cup.png"} alt="Coffee cup image" width={20} height={20}></Image>
                        <Heading size={"sm"} marginY={5}>at</Heading>
                    </HStack>

                    <Text>Block B and C, New Tollygunge, Aurobindo Park, South Kolkata, West Bengal 700093</Text>

                    <Heading size={"sm"} marginY={5}>You might see me on</Heading>

                    {socialAccounts.map((socialAccount, index) => (
                        <Link href={socialAccount.link} key={index} isExternal marginRight={3}>
                            <FontAwesomeIcon icon={socialAccount.icon} size="2xl" color={socialAccount.color} />
                        </Link>
                    ))}
                </Box>

                <Card borderRadius={10}>

                </Card>
            </SimpleGrid>
        </>
    )
}
