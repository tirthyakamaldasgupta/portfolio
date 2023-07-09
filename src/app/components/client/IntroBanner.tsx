import { Box, HStack, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faHashnode, faLinkedin, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";


export default function IntroBanner() {
    const contactInfo = [
        {
            type: "email",
            imageAlt: "Primary Email",
            imageUrl: "mail.png",
            value: "dasguptatirthyakamal@gmail.com",
            href: "mailto:dasguptatirthyakamal@gmail.com",
        },
        {
            type: "email",
            imageAlt: "Secondary Email",
            imageUrl: "mail.png",
            value: "dasguptatirthyakamal@outlook.com",
            href: "mailto:dasguptatirthyakamal@outlook.com",
        },
        {
            type: "phone",
            imageAlt: "Primary Phone",
            imageUrl: "phone.png",
            value: "+918240693916",
            href: "tel:+918240693916",
        },
        {
            type: "phone",
            imageAlt: "Secondary Phone",
            imageUrl: "phone.png",
            value: "+918017352824",
            href: "tel:+918017352824",
        },
        {
            type: "address",
            imageAlt: "Address",
            imageUrl: "map-marker.png",
            value: "B-8, Aurobindo Park, Kolkata, West Bengal 700093, India",
        },
    ];

    const socialLinks = [
        { icon: faLinkedin, href: "https://www.linkedin.com/in/tirthya-kamal-dasgupta/" },
        { icon: faMedium, href: "https://medium.com/@tirthyakamaldasgupta12" },
        { icon: faHashnode, href: "https://tirthya-kamal-dasgupta.hashnode.dev/" },
        { icon: faGithub, href: "https://github.com/tirthyakamaldasgupta" },
        { icon: faYoutube, href: "https://www.youtube.com/channel/UCnESi7g2P7lhhJ1Jy36SuqA" },
    ];

    return (
        <SimpleGrid columns={[1, 2]} spacing={4} padding={4}>
            <Box>
                <Heading size="3xl" color={"#03C988"}>
                    Hello. I'm,
                </Heading>
                <Heading size="2xl" fontWeight={"semibold"}>
                    Tirthya Kamal Dasgupta
                </Heading>
                <Heading size="xl" fontWeight={"normal"}>
                    Automation Engineer | Full Stack Developer
                </Heading>

                {contactInfo.map((info, index) => (
                    <HStack key={index}>
                        <Box>
                            <Image src={info.imageUrl} alt={info.imageAlt} height={12} />
                        </Box>
                        <Box>
                            {info.type === "address" ? (
                                <Text>{info.value}</Text>
                            ) : (
                                <Link href={info.href}>{info.value}</Link>
                            )}
                        </Box>
                    </HStack>
                ))}

                <HStack spacing={3} wrap="wrap">
                    {socialLinks.map((link, index) => (
                        <Link key={index} href={link.href} isExternal>
                            <FontAwesomeIcon icon={link.icon} size="2xl" />
                        </Link>
                    ))}
                </HStack>
            </Box>
            <Box>
                <Image src="tirthya-kamal-dasgupta.png" alt="Tirthya Kamal Dasgupta" height={500} width={500} />
            </Box>
        </SimpleGrid>
    )
}
