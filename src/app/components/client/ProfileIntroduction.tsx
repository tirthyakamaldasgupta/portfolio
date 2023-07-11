import {Box, Button, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ProfileIntroduction() {
    return (
        <SimpleGrid columns={[1, 2]} spacing={1} padding={4}>
            <Box>
                <Heading size="3xl" color={"#03C988"} marginBottom={5}>
                    Hello. I&apos;m,
                </Heading>
                <Heading size="2xl" fontWeight={"semibold"} marginBottom={3} color={"#ffffff"}>
                    Tirthya Kamal Dasgupta
                </Heading>
                <Heading size="lg" fontWeight={"normal"}>
                    <Text as={"span"} display={"inline"} fontWeight={"semibold"} color={"#ffffff"}>Automation
                        Engineer</Text> at <Text as={"span"} display={"inline"} fontWeight={"semibold"}
                                                 color={"#ffffff"}>BAAR Technologies</Text>
                </Heading>
            </Box>
            <Box>
                <Text>
                    Back in 2014, I got super curious about flashing custom roms on my Android mobile. Although I never
                    got around to building one, that&apos;s when I realized my true passion lies in developing applications.
                    <br/>
                    <br/>
                    I now work as an <Text as={"span"} display={"inline"} fontWeight={"semibold"} color={"#ffffff"}>Automation
                    Engineer</Text> at <Text as={"span"} display={"inline"} fontWeight={"semibold"} color={"#ffffff"}>BAAR
                    Technologies</Text>, where I dive into the exciting world of <Text as={"span"} display={"inline"}
                                                                                       fontWeight={"semibold"}
                                                                                       color={"#ffffff"}>Robotic Process
                    Automation</Text> and its incredible capabilities. My main responsibility revolves around developing
                    and enhancing <Text as={"span"} display={"inline"} fontWeight={"semibold"}
                                        color={"#ffffff"}>BAARIGA</Text>, our in-house digital identity management
                    platform.
                    <br/>
                    <br/>
                    When I&apos;m not busy with that, I love creating <Text as={"span"} display={"inline"}
                                                                       fontWeight={"semibold"} color={"#ffffff"}>Web
                    Applications</Text> and incorporating all sorts of cutting-edge technologies that adhere to industry
                    standards.
                    <br/>
                    <br/>
                    During my free time, you&apos;ll probably catch me jamming with fellow musicians, experimenting with
                    random mixes in <Text as={"span"} display={"inline"} fontWeight={"semibold"} color={"#ffffff"}>FL
                    Studio</Text>, writing blogs, making videos on my YouTube channel, or getting creative with <Text
                    as={"span"} display={"inline"} fontWeight={"semibold"} color={"#ffffff"}>Canva</Text> to design
                    graphics for my dad.
                </Text>
            </Box>
        </SimpleGrid>
    )
}
