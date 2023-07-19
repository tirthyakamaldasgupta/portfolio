import { Box, Button, Heading, Link, List, ListIcon, ListItem, SimpleGrid, Tag, TagLabel, TagLeftIcon, Text, UnorderedList } from "@chakra-ui/react";
import { faArrowRight, faCircleCheck, faTag, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal } from "react";

export default function ProfessionalExperience() {
    const professionalExperiences = [{
        startingDate: "March 2022",
        endingDate: "Present",
        jobTitle: "Sr. Automation Engineer",
        companyName: "BAAR Technologies",
        companyLink: "https://www.baar.ai",
        jobDescription: "I am accountable for the integration of BAAR (an in-house Business Workflow Automation platform) with BAARIGA (an in-house Identity Management Platform).",
        skills: ["Workday Integration", "DocuSign", "Python", "RPA", "SSMS", "REST APIs", "Jira Service Management", "Playwright", "SAP Successfactors", "BAARIGA", "Zoho People", "BAAR", "Django", "Django REST Framework", "Git", "Bitbucket", "Microsoft SQL Server"]
    }, {
        startingDate: "April 2021",
        endingDate: "March 2022",
        jobTitle: "Automation Engineer",
        companyName: "BAAR Technologies",
        companyLink: "https://www.baar.ai",
        jobDescription: (
            <>
                I have experience with prominent clients in manufacturing and consulting, specializing in process automation for data monitoring, document generation, and vendor communication. I've also developed user-friendly web applications. Below are the projects I have had the opportunity to work on:
                <br />
                <List>
                    <ListItem>
                        <ListIcon as={FontAwesomeIcon} icon={faCircleCheck} color={"#03C988"} />
                        With one of my clients in the manufacturing industry, I was responsible for designing and implementing process automation workflows in BAAR, to monitor newly submitted data to a data lake integrated with a mobile application, automatically generating Word documents based on predefined structured templates, and sending them to the relevant stakeholders over email.</ListItem>
                    <ListItem>
                        <ListIcon as={FontAwesomeIcon} icon={faCircleCheck} color={"#03C988"} />
                        With a prominent client in the manufacturing industry, I simplified the process of communication with the vendors for the supply of components. I achieved this by designing and implementing process automation workflows in BAAR to monitor the conversations between the manufacturer and its vendors, and automatically update the quotation prices of the components accordingly for the client, inside their proprietary application.</ListItem>
                    <ListItem>
                        <ListIcon as={FontAwesomeIcon} icon={faCircleCheck} color={"#03C988"} />
                        I was responsible for creating a streamlined, user-friendly web application client for a global consulting firm. This application simplified interactions with a complex recruitment process tracking application, making it easier for the client to manage their recruitment process.</ListItem>
                </List>
            </>
        ),
        "skills": [
            "Python",
            "RPA",
            "Process Scheduler",
            "OAuth",
            "Microsoft Word",
            "REST APIs",
            "BAAR",
            "Selenium",
            "Django",
            "Robot Framework",
            "MySQL",
            "HTML5",
            "jQuery",
            "Django REST Framework",
            "Git",
            "Bitbucket",
            "CSS",
            "python-docx",
            "Document Generation",
            "DocVision"
        ]
    }];

    const downloadResume = () => {
        const link = document.createElement("a");

        link.href = "Tirthya-Kamal-Dasgupta-Resume.pdf";

        link.download = "Tirthya-Kamal-Dasgupta-Resume.pdf";

        link.click();
    };

    return (<>
        <SimpleGrid id="experience-grid" columns={[1, 2]} spacing={1} padding={4}>
            <Box>
                <Heading size={"md"} color={"#000000"}>PROFESSIONAL EXPERIENCE</Heading>
            </Box>
        </SimpleGrid>

        {professionalExperiences.map((professionalExperience: {
            startingDate: string | number | boolean | ReactElement | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
            endingDate: string | number | boolean | ReactElement | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
            jobTitle: string | number | boolean | ReactElement | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
            companyLink: string | undefined;
            companyName: string | number | boolean | ReactElement | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
            jobDescription: string | number | boolean | ReactElement | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
            skills: (string | number | boolean | ReactPortal | PromiseLikeOfReactNode | ReactElement | Iterable<ReactNode> | null | undefined)[];
        }, professionalExperienceIndex: Key | null | undefined) => (
            <SimpleGrid key={professionalExperienceIndex} columns={[1, 2]} spacing={1} padding={4}>
                <Box>
                    <Heading
                        size={"sm"}>{professionalExperience.startingDate} - {professionalExperience.endingDate}</Heading>
                </Box>

                <Box>
                    <Heading size={"sm"} color={"#000000"}
                        marginBottom={2}>{professionalExperience.jobTitle}</Heading>
                    <Heading size={"sm"}><Link
                        href={professionalExperience.companyLink} target={"_blank"}
                        rel={"noopener noreferrer"}>{professionalExperience.companyName}<FontAwesomeIcon
                            icon={faUpRightFromSquare} style={{ marginLeft: "5px" }} /></Link></Heading>
                    <Text marginY={5}>{professionalExperience.jobDescription}</Text>

                    {professionalExperience.skills.map((skill: string | number | boolean | ReactElement | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined, skillIndex: Key | null | undefined) => (
                        <Tag key={skillIndex} variant={"solid"} size={"md"} isTruncated={false}
                            borderRadius={"full"} marginRight={2} marginBottom={2} backgroundColor={"#03b077"}>
                            <TagLeftIcon boxSize={4}>
                                <FontAwesomeIcon icon={faTag} />
                            </TagLeftIcon>
                            <TagLabel>{skill}</TagLabel>
                        </Tag>))}
                </Box>
            </SimpleGrid>))}
        <SimpleGrid columns={[1, 2]} spacing={1} padding={4}>
            <Box></Box>
            <Box>
                <Button colorScheme="blackAlpha" onClick={downloadResume}>
                    <Text>Download resume</Text>
                    <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "5px" }} />
                </Button>
            </Box>
        </SimpleGrid>
    </>)
}
