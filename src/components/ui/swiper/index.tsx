import React, { FC, memo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './styles.module.sass';

type Props = {
    cards: JSX.Element[]
};

const Carousel: FC<Props> = ({ cards })  => {

    const result: JSX.Element[] = cards.map((card: any) => (
        <SwiperSlide key={card.key}>
            {card}
        </SwiperSlide>
    ));

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={false}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className={styles.mySwiper}
        >
            {result}
        </Swiper>
    );
};

export default memo(Carousel);
