import { Flex, Icon, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { FiChevronLeft } from 'react-icons/fi'
import { Logo } from "./Logo";

interface HeaderProps {
    isCountry?: boolean
}

export function Header({ isCountry = false }: HeaderProps) {
    const router = useRouter();
    const handleBackClick = () => {
        router.push('/');
    }

    return (
        <Flex
            as="header"
            w="100%"
            maxW={1440}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
            justify="space-between"
        >
            {isCountry && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={FiChevronLeft} />}
                    fontSize="24"
                    variant="unstyled"
                    mr="2"
                    onClick={handleBackClick}
                >
                </IconButton>
            )}
            {isCountry && (<Logo src="/images/LogoCountry.svg"/>)}
            {!isCountry && (<Logo src="/images/LogoHome.svg"/>)}
        </Flex>
    )    
}