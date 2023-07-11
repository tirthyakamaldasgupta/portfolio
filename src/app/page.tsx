"use client";

import IntroBanner from "./components/client/IntroBanner";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex align="center" height="85vh" justify="center" marginY={20}>
      <Box width="60%">
        <IntroBanner />
      </Box>
    </Flex>
  )
}
