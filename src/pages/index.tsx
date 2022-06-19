import { Box, Divider, Flex, Image, Img, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from 'next/link';

import db from '../../continents.json';

import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Banner } from "../components/Home/Banner";
import { TravelTypes } from "../components/Home/TravelTypes";
import { Slider } from "../components/Slider";

export default function Home() {
  const continents = db.continents;

  return (
    <Box>
      <Header />
      <Container>
        <Banner />
        <TravelTypes />
        <Flex justify="center">
          <Divider border="2px solid" borderColor="yellow.500" w={100} />
        </Flex>
        <Flex
          w="100%"
          align="center"
          justify="center"
        >
          <Text
            fontSize={["1.125rem", "2rem"]}
            fontWeight="500"
            fontStyle="normal"
            lineHeight={["2rem", "3rem"]}
            textAlign="center"
            my={["2rem", "3.75rem"]}
          >
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>
        </Flex>
        <Slider continents={continents}/>
        <Flex
          w="100%"
          align="center"
          justify="center"
        >
        </Flex>
      </Container>
    </Box>
  )
}
