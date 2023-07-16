import {Box, Button, Heading, Link, SimpleGrid, Tag, TagLabel, TagLeftIcon, Text} from "@chakra-ui/react";
import {faArrowRight, faTag, faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Projects() {
    const workProjects = [{
        projectTitle: "Automated document generation",
        companyName: "BAAR Technologies",
        companyLink: "https://www.baar.ai",
        projectDescription: "With one of my clients in the manufacturing industry, I was responsible for designing and implementing process automation workflows in BAAR, to monitor newly submitted data to a data lake integrated with a mobile application, automatically generating Word documents based on predefined structured templates, and sending them to the relevant stakeholders over email.",
        skills: ["python-docx", "Document Generation", "Python", "Microsoft Word", "BAAR"]
    }, {
        projectTitle: "Automated vendor communication and pricing",
        companyName: "BAAR Technologies",
        companyLink: "https://www.baar.ai",
        projectDescription: "With a prominent client in the manufacturing industry, I simplified the process of communication with the vendors for the supply of components. I achieved this by designing and implementing process automation workflows in BAAR to monitor the conversations between the manufacturer and its vendors, and automatically update the quotation prices of the components accordingly for the client, inside their proprietary application.",
        skills: ["DocVision", "Python", "BAAR", "Selenium"]
    }, {
        projectTitle: "Recruitment process tracking application web client",
        companyName: "BAAR Technologies",
        companyLink: "https://www.baar.ai",
        projectDescription: "I was responsible for creating a streamlined, user-friendly web application client for a global consulting firm. This application simplified interactions with a complex recruitment process tracking application, making it easier for the client to manage their recruitment process.",
        skills: ["Python", "OAuth", "REST APIs", "Django", "jQuery", "Django REST Framework"]
    }];

    const sideProjects = [{
        projectTitle: "PAN Card Utility",
        projectDescription: (<>
            This project showcases a Python-based application that streamlines the process of handling PAN Card
            images and their associated metadata. When the application is executed, it diligently monitors a
            designated directory, actively searching for any new PAN Card images that may have been added. Upon
            detecting image(s), it seamlessly converts them to base64 representation, optimizing its compatibility
            for subsequent processing.
            <br/>
            <br/>
            The application harnesses the immense capabilities of IDfy&apos;s PAN OCR API, a cutting-edge solution that
            leverages advanced optical character recognition technology specifically tailored for PAN Cards. By
            integrating this API into the workflow, the application retrieves comprehensive and accurate metadata
            from the PAN Card images, extracting key details such as name, date of birth, PAN number, and more.
            <br/>
            <br/>
            With the extracted metadata in hand, the application proceeds to store this valuable information in a
            secure and efficient MySQL database, completely managed by PlanetScale. This enables streamlined access,
            retrieval, and management of PAN Card data, promoting easy and secured handling of user data and minimizing
            manual data entry errors. Additionally, it archives the processed images into a separate designated
            folder.
        </>),
        skills: ["Serverless Computing", "Docker", "Python", "REST APIs", "MySQL"],
        buttonText: "Visit GitHub repository",
        buttonLink: "https://github.com/tirthyakamaldasgupta/pan-card-utility"
    }];

    return (<>
        <SimpleGrid columns={[1, 2]} spacing={1} padding={4}>
            <Box>
                <Heading size="md" color="#ffffff">PROJECTS</Heading>
            </Box>
        </SimpleGrid>

        <SimpleGrid columns={[1, 2]} spacing={1} padding={4}>
            <Box>
                <Heading size="sm" marginBottom={[4, 0]}>WORKPLACE VENTURES</Heading>
            </Box>
            <Box>
                {workProjects.map((project, index) => (<Box key={index} marginBottom={8}>
                    <Heading size="sm" color="#ffffff" marginBottom={2}>{project.projectTitle}</Heading>
                    <Heading size="sm">
                        <Link href={project.companyLink} target={"_blank"}
                              rel={"noopener noreferrer"}>{project.companyName}<FontAwesomeIcon
                            icon={faUpRightFromSquare} style={{marginLeft: "5px"}}/></Link>
                    </Heading>
                    <Text marginY={5}>{project.projectDescription}</Text>

                    {project.skills.map((skill, skillIndex) => (
                        <Tag key={skillIndex} variant="solid" size="md" isTruncated={false} borderRadius="full"
                             marginRight={2} marginBottom={2} backgroundColor="#03b077">
                            <TagLeftIcon boxSize={4}>
                                <FontAwesomeIcon icon={faTag}/>
                            </TagLeftIcon>
                            <TagLabel>{skill}</TagLabel>
                        </Tag>))}
                </Box>))}
            </Box>
        </SimpleGrid>

        <SimpleGrid columns={[1, 2]} spacing={1} padding={4}>
            <Box>
                <Heading size="sm" marginBottom={[4, 0]}>SIDE SPLITTERS</Heading>
            </Box>
            <Box>
                {sideProjects.map((project, index) => (<Box key={index} marginBottom={8}>
                    <Heading size="sm" color="#ffffff" marginBottom={2}>{project.projectTitle}</Heading>
                    <Text marginY={5}>{project.projectDescription}</Text>

                    {project.skills.map((skill, skillIndex) => (
                        <Tag key={skillIndex} variant="solid" size="md" isTruncated={false} borderRadius="full"
                             marginRight={2} marginBottom={2} backgroundColor="#03b077">
                            <TagLeftIcon boxSize={4}>
                                <FontAwesomeIcon icon={faTag}/>
                            </TagLeftIcon>
                            <TagLabel>{skill}</TagLabel>
                        </Tag>))}

                    <Box marginTop={8}>
                        <Button as={Link} href={project.buttonLink} target={"_blank"}
                                rel={"noopener noreferrer"} textDecoration={"none"}
                                _hover={{textDecoration: "none"}}><Text>{project.buttonText}</Text><FontAwesomeIcon
                            icon={faArrowRight} style={{marginLeft: "5px"}}/></Button>
                    </Box>
                </Box>))}
            </Box>
        </SimpleGrid>
    </>)
}
