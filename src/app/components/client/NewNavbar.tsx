import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
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

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function NewNavbar() {
  const items = ["EXPERIENCE", "PROJECTS", "EDUCATION", "BLOGS", "CONNECT"];

  const {isOpen, onOpen, onClose} = useDisclosure();

  const displayDesktop = useBreakpointValue({base: false, lg: true});

  return (
      <Flex
          as="nav"
          alignItems="center"
          justifyContent="space-between"
          backgroundColor={"#05001a"}
          boxShadow="md"
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
          <Heading fontSize={"lg"} fontWeight={"extrabold"} className={bebasNeue.className} color={"#F2B6A0"}>
              TIRTHYA KAMAL DASGUPTA
          </Heading>
          {displayDesktop && (
              <ButtonGroup gap="2">
                  {items.map((item) => (
                      <Button key={item} variant="ghost"
                              color={"inherit"}
                              _hover={{color: "black", backgroundColor: "gray.50"}}>
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
                      icon={<HamburgerIcon color={"#bcd4f5"}/>}
                      onClick={onOpen}
                      variant="ghost"
                  />
                  <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                      <DrawerOverlay/>
                      <DrawerContent backgroundColor={"#05001a"}>
                          <DrawerBody>
                              {items.map((item) => (
                                  <Button
                                      key={item}
                                      variant="ghost"
                                      color={"inherit"}
                                      _hover={{color: "black", backgroundColor: "gray.50"}}
                                      w="100%"
                                      mb={2}
                                      onClick={onClose}
                                      colorScheme="teal"
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