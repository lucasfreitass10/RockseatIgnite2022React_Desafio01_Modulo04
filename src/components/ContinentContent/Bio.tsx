import { Text } from "@chakra-ui/react";

interface BioProps {
    description: string
}

export function Bio({ description }: BioProps) {
    return (
        <Text
            w={[375, 600]}
            fontSize={["1rem", "1.5rem"]}
            fontWeight="400"
            color="gray.600"
            fontStyle="normal"
            lineHeight={["5", "9"]}
        >
            {description}
        </Text>

    )
}