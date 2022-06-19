import { Box, Flex, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

import { Continent } from "../../utils/types";

type SliderItemProps = {
    continent: Continent
};

export const SliderItem = ({ continent }: SliderItemProps) => {
    return (
        <Link href={`/${continent.id}`} passHref>
            <ChakraLink as="a">
                <Box
                    w={[375,1240]}
                    h={[250,450]}
                    bgImage={continent.image}
                    filter="brightness(0.8)"
                >
                    <Flex align="center" justify="center" h="100%">
                        <Stack>
                            <Text
                                fontSize={["1.5rem", "3rem"]}
                                fontWeight="700"
                                fontStyle="normal"
                                lineHeight="4.5rem"
                                textAlign="center"
                                color="gray.50"
                            >
                                {continent.name}
                            </Text>
                            <Text
                                fontSize={["1rem", "1.5rem"]}
                                fontWeight="700"
                                fontStyle="normal"
                                lineHeight="2.125rem"
                                textAlign="center"
                                color="gray.50"
                            >
                                {continent.comment}
                            </Text>
                        </Stack>
                    </Flex>
                </Box>

            </ChakraLink>
        </Link>
    );
}