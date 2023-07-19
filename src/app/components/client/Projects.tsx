import {Box, Button, Heading, Link, SimpleGrid, Tag, TagLabel, TagLeftIcon, Text} from "@chakra-ui/react";
import {faArrowRight, faTag, faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Projects() {
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
        <SimpleGrid id="projects-grid" columns={[1, 2]} spacing={1} padding={4}>
            <Box>
                <Heading size="md" color="#000000">PROJECTS</Heading>
            </Box>
        </SimpleGrid>

        <SimpleGrid columns={[1, 2]} spacing={1} padding={4}>
            <Box>
                <Heading size="sm" marginBottom={[4, 0]}>PASSION PROJECTS</Heading>
            </Box>
            <Box>
                {sideProjects.map((project, index) => (<Box key={index} marginBottom={8}>
                    <Heading size="sm" color="#000000" marginBottom={2}>{project.projectTitle}</Heading>
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
                                rel={"noopener noreferrer"} colorScheme="blackAlpha"><Text>{project.buttonText}</Text><FontAwesomeIcon
                            icon={faArrowRight} style={{marginLeft: "5px"}}/></Button>
                    </Box>
                </Box>))}
            </Box>
        </SimpleGrid>
    </>)
}
