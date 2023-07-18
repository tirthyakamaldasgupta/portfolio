import {Heading, HStack, Link} from "@chakra-ui/react";
import NextJSIcon from "./icons/NextJSIcon";
import ChakraUIIcon from "./icons/ChakraUIIcon";
import VercelIcon from "./icons/VercelIcon";

export default function Footer() {
    return (<>
            <Heading size={"xs"} color={"#ffffff"} textAlign={"center"} marginBottom={2}>Copyright © 2023 Tirthya Kamal
                Dasgupta. All rights reserved.</Heading>
            <HStack justifyContent={"center"}>
                <Heading size={"xs"} color={"#ffffff"} fontWeight={"normal"}>Powered by</Heading>
                <Link href="https://nextjs.org/" target={"_blank"} rel="noreferrer" isExternal><NextJSIcon/></Link>
                <Heading size={"xs"} color={"#ffffff"} fontWeight={"normal"}>and</Heading>
                <Link href="https://chakra-ui.com/" target={"_blank"} rel="noreferrer" isExternal><ChakraUIIcon/></Link>
                <Heading size={"xs"} color={"#ffffff"} fontWeight={"normal"}>and deployed to</Heading>
                <Link href="https://vercel.com/" target={"_blank"} rel="noreferrer" isExternal><VercelIcon/></Link>
            </HStack>
        </>)
}
