import {
    Button,
    ButtonGroup,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Heading,
    IconButton,
    Spacer,
    useBreakpointValue,
    useDisclosure
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {Bebas_Neue} from "next/font/google";
import {Link as ScrollLink} from "react-scroll";

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});

export default function Navbar() {
    const items = ["EXPERIENCE", "PROJECTS", "EDUCATION", "BLOGS", "CONNECT"];

    const {isOpen, onOpen, onClose} = useDisclosure();

    const displayDesktop = useBreakpointValue({base: false, lg: true});

    return (
        <Flex
            as="nav"
            alignItems="center"
            justifyContent="space-between"
            backgroundColor={"#F6F1E9"}
            boxShadow="white"
            padding="2"
            position="fixed"
            top="0"
            left="0"
            right="0"
            zIndex="sticky"
            paddingY={10}
            width="100%"
            maxWidth={{base: "95%", lg: "70%"}}
            mx="auto"
        >
            <Heading fontSize={"lg"} fontWeight={"extrabold"} className={bebasNeue.className} color={"#e36435"}>
                TIRTHYA KAMAL DASGUPTA
            </Heading>
            {displayDesktop && (
                <ButtonGroup gap="2">
                    {items.map((item) => (
                        <Button
                            as={ScrollLink}
                            key={item}
                            to={item.toLowerCase() + "-grid"}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={700}
                            activeClass="active"
                            className="nav-link"
                            variant="ghost"
                            color={"inherit"}
                            _hover={{color: "#ffffff", backgroundColor: "#000000"}}>
                            {item}
                        </Button>
                    ))}
                </ButtonGroup>
            )}
            {!displayDesktop && (
                <>
                    <Spacer/>
                    <IconButton
                        aria-label="Open menu"
                        icon={<HamburgerIcon color={"#526D82"}/>}
                        onClick={onOpen}
                        variant="ghost"
                    />
                    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay/>
                        <DrawerContent backgroundColor={"#F6F1E9"}>
                            <DrawerBody>
                                {items.map((item) => (
                                    <Button
                                        as={ScrollLink}
                                        key={item}
                                        to={item.toLowerCase() + "-grid"}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={700}
                                        activeClass="active"
                                        className="nav-link"
                                        variant="ghost"
                                        color={"inherit"}
                                        _hover={{color: "#ffffff", backgroundColor: "#000000"}}
                                        w="100%"
                                        mb={2}
                                        onClick={onClose}
                                    >
                                        {item}
                                    </Button>
                                ))}
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </>
            )}
        </Flex>
    );
};