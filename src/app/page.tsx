"use client";

import styles from "./page.module.css";
import IntroBanner from "./components/client/IntroBanner";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex align="center" justify="center" height="100vh">
    <Box width="80%">
      <IntroBanner />
    </Box>
  </Flex>
  )
}
