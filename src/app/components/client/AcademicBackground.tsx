import {Box, Heading, Link, SimpleGrid} from "@chakra-ui/react";
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function AcademicBackground() {
    const academicBackgrounds = [
        {
            startingDate: "2022",
            endingDate: "2020",
            degree: "Master's",
            domain: "Computer Applications",
            universityName: "Maulana Abul Kalam Azad University of Technology",
            universityLink: "https://makautwb.ac.in"
        },
        {
            startingDate: "2017",
            endingDate: "2020",
            degree: "Bachelor's",
            domain: "Computer Applications",
            universityName: "Maulana Abul Kalam Azad University of Technology",
            universityLink: "https://makautwb.ac.in"
        }
    ];

    return (
        <>
            <SimpleGrid columns={[1, 2]} spacing={1} padding={4}>
                <Box>
                    <Heading size={"md"} color={"#ffffff"}>ACADEMIC BACKGROUND</Heading>
                </Box>
            </SimpleGrid>

            {academicBackgrounds.map((academicBackground, index) => (
                <SimpleGrid key={index} columns={[1, 2]} spacing={1} padding={4}>
                    <Box>
                        <Heading
                            size={"sm"}>{academicBackground.startingDate} - {academicBackground.endingDate}</Heading>
                    </Box>

                    <Box>
                        <Heading size={"sm"} color={"#ffffff"}
                                 marginBottom={2}>{academicBackground.degree} degree, {academicBackground.domain}</Heading>
                        <Heading size={"sm"}><Link
                            href={academicBackground.universityLink}>{academicBackground.universityName}<FontAwesomeIcon
                            icon={faUpRightFromSquare} style={{marginLeft: "5px"}}/></Link></Heading>
                    </Box>
                </SimpleGrid>
            ))}
        </>
    )
}
