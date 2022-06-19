import { Flex, Img, useBreakpointValue } from "@chakra-ui/react"

export function TravelTypes() {
    const isMobile = useBreakpointValue({
        base: true,
        sm: false
    })

    console.log(isMobile);
    if (isMobile) {
        return (
            <Flex
                align="center"
                justify="space-around"
                m="16"
                mt="20"
                h="36"
            >
                <ul>
                    <li>Vida noturna</li>
                    <li>Praia</li>
                    <li>Moderno</li>
                    <li>Classico</li>
                    <li>e mais...</li>
                </ul>
            </Flex>
        )    
    }

    return (
        <Flex
            align="center"
            justify="space-around"
            m="16"
            mt="20"
            h="36"
        >
            <Img src="/images/Nightlife.svg" />
            <Img src="/images/Beach.svg" />
            <Img src="/images/Modern.svg" />
            <Img src="/images/Classic.svg" />
            <Img src="/images/More.svg" />
        </Flex>
    )
}