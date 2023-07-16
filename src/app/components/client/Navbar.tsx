import {Box, Button, Flex, Heading, IconButton, Spacer, useBreakpointValue} from "@chakra-ui/react";
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {Quicksand} from "next/font/google";

const quicksand = Quicksand({
    weight: "600",
    subsets: ["latin"],
});

export default function Navbar() {
    const isMobile = useBreakpointValue({base: true, lg: false});
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const items = ["EXPERIENCE", "PROJECTS", "EDUCATION", "CONNECT"];

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Box as="nav" bg="transparent" py={2} px={4} boxShadow="sm" zIndex={1}>
            <Flex align="center">
                <Heading className={quicksand.className} color={"#F2B6A0"}>
                    Tirthya Kamal Dasgupta
                </Heading>
                <Spacer/>
                {isMobile ? (
                    <>
                        {isMenuOpen ? (
                            <IconButton aria-label="Close Menu" variant="ghost" color={"inherit"} icon={<CloseIcon/>}
                                        onClick={handleMenuToggle}/>
                        ) : (
                            <IconButton aria-label="Open Menu" variant="ghost" color={"inherit"} icon={<HamburgerIcon/>}
                                        onClick={handleMenuToggle}/>
                        )}
                    </>
                ) : (
                    <Flex align="center">
                        {items.map((item) => (
                            <Button key={item} mx={2} variant="ghost" color={"inherit"}
                                    _hover={{color: "black", backgroundColor: "gray.50"}}>
                                {item}
                            </Button>
                        ))}
                    </Flex>
                )}
            </Flex>
            {isMobile && isMenuOpen && (
                <Box mt={2} p={2} bg="transparent" boxShadow="sm">
                    <Flex direction="column">
                        {items.map((item) => (
                            <Button key={item} mb={2} variant="ghost" color={"inherit"}
                                    _hover={{color: "black", backgroundColor: "white"}}>
                                {item}
                            </Button>
                        ))}
                    </Flex>
                </Box>
            )}
        </Box>
    );
}
