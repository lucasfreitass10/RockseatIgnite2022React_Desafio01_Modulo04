import { Flex, Text } from "@chakra-ui/react";

interface BannerProps {
    name: string
    image: string
}

export function Banner({ name, image }: BannerProps) {
    return (
        <Flex
            w="100%"
            h={500}
            bgImage={image || ''}
        >
            <Text
                fontSize="2.5rem"
                fontWeight="600"
                color="gray.50"
                fontStyle="normal"
                lineHeight="4rem"
                m="auto"
                mb="3.75rem"
                ml="8.75rem"
            >
                {name}
            </Text>
        </Flex>

    )
}