import { Box, Flex, Img, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
    const isMobile = useBreakpointValue({
        base: true,
        sm: false
    })

    return (
        <Box bgImage="/images/Background.svg">
            <Flex
                w="100%"
                h={370}
                justify="space-between"
                bg="transparent"
                px="20"
            >
                <Stack my="auto">
                    <Text
                        fontSize="2.125rem"
                        fontWeight="500"
                        color="gray.50"
                        fontStyle="normal"
                        lineHeight="3rem"
                    >
                        5 Contimentes, <br />
                        infinitas possibilidade
                    </Text>
                    <Text
                        fontSize="1.125rem"
                        fontWeight="400"
                        color="gray.50"
                        fontStyle="normal"
                        lineHeight="1.8rem"
                    >
                        Chegou a hora de tira do papel a viajem que você <br />
                        sempre sonhou.
                    </Text>
                </Stack>
                {isMobile || <Img src="/images/Airplane.svg" />}
            </Flex>
        </Box>
    )
}