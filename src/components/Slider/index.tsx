import { Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/core';

import { Continent } from '../../utils/types';
import { SliderItem } from './SliderItem';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

interface SliderProps {
    continents: Continent[]
}

export const Slider = ({ continents }: SliderProps) => {
    return (
        <Flex
            h={[250,450]}
            w={[375,1240]}
            align="center"
            justify="center"
        >
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                className=""
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {continents.map(continent => (
                    <SwiperSlide key={continent.name}>
                        <SliderItem continent={continent} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Flex>
    );
};