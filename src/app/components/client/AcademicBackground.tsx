import {Box, Heading, SimpleGrid} from "@chakra-ui/react";

export default function AcademicBackground() {
    const academicBackgrounds = [
        {
            startingDate: "2020",
            endingDate: "2022",
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
                        <Heading size={"sm"}>{academicBackground.universityName}</Heading>
                    </Box>
                </SimpleGrid>
            ))}
        </>
    )
}
