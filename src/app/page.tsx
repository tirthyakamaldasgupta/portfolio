"use client";

import ProfileIntroduction from "./components/client/ProfileIntroduction";
import {Box, Flex} from "@chakra-ui/react";

export default function Home() {
    return (
        <><Flex align="center" height="85vh" justify="center" marginY={20}>
        <Box width="60%">
          <ProfileIntroduction />
        </Box>
      </Flex><Flex align="center" height="85vh" justify="center" marginY={20}>
          <Box width="60%">
            <ProfileIntroduction />
          </Box>
        </Flex></>
    )
}
