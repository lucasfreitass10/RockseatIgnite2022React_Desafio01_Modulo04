import { Flex, Img, ImgProps } from "@chakra-ui/react";

type LogoProps = ImgProps;

export function Logo({ src }: LogoProps) {
    return (
        <Flex
            align="center"
            mx="auto"
        >
            <Img
                src={src}
                w={[81,184]}
                h={[20,46]}
            />
        </Flex>
    );
}