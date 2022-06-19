import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";

import db from '../../continents.json';

import { Container } from "../components/Container";
import { Banner } from "../components/ContinentContent/Banner";
import { Bio } from "../components/ContinentContent/Bio";
import { Cities100 } from "../components/ContinentContent/Cities100";
import { Info } from "../components/ContinentContent/Info";
import { Header } from "../components/Header";
import { Continent } from "../utils/types";

interface ShowContinentPops {
    continent: Continent
};

export default function ShowContinent({ continent }: ShowContinentPops) {
    console.log(continent);
    return (
        <Box>
            <Header isCountry />
            <Container>
                <Banner name={continent.name} image={continent.image} />
                <Flex w="100%" justify="center" >
                    <SimpleGrid
                        w={1160}
                        minChildWidth="480px"
                        spacing="16"
                        py="36"
                        >
                        <Bio description={continent.description} />
                        <Info countries={continent.countries} languages={continent.languages} citiesIn100={continent.citiesIn100.length} />
                    </SimpleGrid>
                    {/* <Flex
                        w={1160}
                        align="center"
                        justify="space-around"
                        gap="16"
                        py="36"
                    >
                        <Bio description={continent.description} />
                        <Info countries={continent.countries} languages={continent.languages} citiesIn100={continent.citiesIn100.length} />
                    </Flex> */}
                </Flex>
                <Cities100 citiesIn100={continent.citiesIn100} />
            </Container>
        </Box>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params.continent;
    const continent = db.continents.filter(value => value.id === id)?.[0] || {} as Continent;
    return {
        props: {
            continent
        },
        revalidate: 30 * 60 // 30 minutes
    }
}