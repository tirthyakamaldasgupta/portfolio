import {Box, Button, Heading, Link, SimpleGrid, Tag, TagLabel, TagLeftIcon, Text} from "@chakra-ui/react";
import {faArrowRight, faTag, faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal} from "react";

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
        jobDescription: "I have had the opportunity to work with several prominent clients in the manufacturing industry, and a global consulting firm. I have experience in designing and implementing process automation workflows to monitor data, automate document generation, and simplify communication with vendors. Additionally, I have created a user-friendly web application client for a firm.",
        skills: ["Python", "RPA", "Process Scheduler", "OAuth", "Microsoft Word", "REST APIs", "BAAR", "Selenium", "Django", "Robot Framework", "MySQL", "HTML5", "jQuery", "Django REST Framework", "Git", "Bitbucket", "CSS"]
    }];

    const downloadResume = () => {
        const link = document.createElement("a");

        link.href = "Tirthya-Kamal-Dasgupta-Resume.pdf";

        link.download = "Tirthya-Kamal-Dasgupta-Resume.pdf";

        link.click();
    };

    return (<>
        <SimpleGrid columns={[1, 2]} spacing={1} padding={4}>
            <Box>
                <Heading size={"md"} color={"#ffffff"}>PROFESSIONAL EXPERIENCE</Heading>
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
                    <Heading size={"sm"} color={"#ffffff"}
                             marginBottom={2}>{professionalExperience.jobTitle}</Heading>
                    <Heading size={"sm"}><Link
                        href={professionalExperience.companyLink} target={"_blank"}
                        rel={"noopener noreferrer"}>{professionalExperience.companyName}<FontAwesomeIcon
                        icon={faUpRightFromSquare} style={{marginLeft: "5px"}}/></Link></Heading>
                    <Text marginY={5}>{professionalExperience.jobDescription}</Text>

                    {professionalExperience.skills.map((skill: string | number | boolean | ReactElement | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined, skillIndex: Key | null | undefined) => (
                        <Tag key={skillIndex} variant={"solid"} size={"md"} isTruncated={false}
                             borderRadius={"full"} marginRight={2} marginBottom={2} backgroundColor={"#03b077"}>
                            <TagLeftIcon boxSize={4}>
                                <FontAwesomeIcon icon={faTag}/>
                            </TagLeftIcon>
                            <TagLabel>{skill}</TagLabel>
                        </Tag>))}
                </Box>
            </SimpleGrid>))}
        <SimpleGrid columns={[1, 2]} spacing={1} padding={4}>
            <Box></Box>
            <Box>
                <Button onClick={downloadResume}>
                    <Text>Download resume</Text>
                    <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: "5px"}}/>
                </Button>
            </Box>
        </SimpleGrid>
    </>)
}
