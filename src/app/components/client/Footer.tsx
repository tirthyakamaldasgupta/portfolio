import { Heading } from "@chakra-ui/react";

export default function Footer() {
    return (
        <>
            <Heading size={"xs"} color={"#ffffff"} textAlign={"center"} marginBottom={2}>Copyright © 2023 Tirthya Kamal Dasgupta. All rights reserved.</Heading>
            <Heading size={"xs"} color={"#ffffff"} textAlign={"center"} fontWeight={"normal"}>This website is designed and developed by Tirthya Kamal Dasgupta using Next.js and Chakra UI, and deployed to Vercel.</Heading>
        </>
    )
}
