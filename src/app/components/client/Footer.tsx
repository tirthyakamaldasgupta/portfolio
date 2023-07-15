import { HStack, Heading } from "@chakra-ui/react";
import NextJSIcon from "./icons/NextJSIcon";
import ChakraUIIcon from "./icons/ChakraUIIcon";
import VercelIcon from "./icons/VercelIcon";

export default function Footer() {
    return (
        <>
            <Heading size={"xs"} color={"#ffffff"} textAlign={"center"} marginBottom={2}>Copyright © 2023 Tirthya Kamal Dasgupta. All rights reserved.</Heading>
            <HStack justifyContent={"center"}>
                <Heading size={"xs"} color={"#ffffff"} fontWeight={"normal"}>Powered by</Heading>
                <NextJSIcon />
                <Heading size={"xs"} color={"#ffffff"} fontWeight={"normal"}>and</Heading>
                <ChakraUIIcon />
                <Heading size={"xs"} color={"#ffffff"} fontWeight={"normal"}>, and deployed to</Heading>
                <VercelIcon />
            </HStack>
        </>
    )
}
