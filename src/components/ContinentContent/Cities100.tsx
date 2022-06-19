import { Box, Flex, Grid, Heading, Image, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { CitiesIn100 } from "../../utils/types";

interface Cities100Props {
    citiesIn100: CitiesIn100[]
}

export function Cities100({ citiesIn100 }: Cities100Props) {
    const isMobile = useBreakpointValue({
        base: true,
        sm: false
    })

    return (
        <Flex
            name="flex_cities"
            w="100%"
            justify="center"
            p="0"
        >
            <Box w={[375, 1160]}>
                <Heading color="gray.600" fontSize={["1.5rem", "2.125rem"]} fontWeight="500">Cidades 100+</Heading>
                <Grid
                    w={[375, 1160]}
                    templateColumns={["1fr", "repeat(4, 1fr)"]}
                    gap={["0", "8"]}
                    mt={["2", "8"]}
                >
                    {citiesIn100.map(citie => (
                        <Box
                            key={citie.name}
                            w="64"
                            h="72"                            
                        >
                            <Image src={citie.image} alt={citie.name} borderRadius="base" />
                            <Flex
                                w="100%"
                                h={100}
                                align="center"
                                justify="space-between"
                                border="1px solid rgba(255,186,8,0.5)"
                                p="6"
                            >
                                <Box>
                                    <Text
                                        fontSize="1.25rem"
                                        fontWeight="600"
                                        color="gray.600"
                                        lineHeight="2.5rem"
                                    >
                                        {citie.country}
                                    </Text>
                                    <Text
                                        fontSize="1rem"
                                        fontWeight="500"
                                        color="gray.600"
                                        lineHeight="2.5rem"
                                    >
                                        {citie.name}
                                    </Text>
                                </Box>
                                <Image w={30} h={30} src={citie.flag} alt={citie.country} />
                            </Flex>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Flex>
    )
}