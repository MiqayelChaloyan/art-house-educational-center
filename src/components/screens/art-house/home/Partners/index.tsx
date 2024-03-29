import { memo, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import Partner from '@/components/ui/parnter';

import { ART_HOUSE_HOME } from '../../../../../../sanity/sanity-queries/art-house';

// Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/autoplay";

// slick-carousel 
import Slider from 'react-slick';

// slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ArianAMU } from '@/constants/font';

import styles from './styles.module.sass';



type Props = {
    data: ART_HOUSE_HOME[]
};


const SampleNextArrow = ({ onClick }: any) => (
    <div className={`${styles.arrow} ${styles.arrow_right}`} onClick={onClick}>
        <SlArrowRight />
    </div>
);

const SamplePrevArrow = ({ onClick }: any) => (
    <div className={`${styles.arrow} ${styles.arrow_left}`} onClick={onClick}>
        <SlArrowLeft />
    </div>
);



const Partners: FC<Props> = ({ data }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const { t } = useTranslation();

    const params = {
        slidesPerView: window.innerWidth <= 1280 ? 5 : 9,
        spaceBetween: 90,
        freeMode: true,
        pagination: {
            clickable: true,
        },
        modules: [FreeMode, Pagination, Autoplay],
        className: styles.swiper,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
    };

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        beforeChange: (current: any, next: any) => setSlideIndex(next),
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        cssEase: 'ease-out',
    }


    return (
        <div id='co-workers' className={styles.container}>
            <h2 className={`${styles.title} ${ArianAMU.className}`}>
                {t('section-titles.partners')}
            </h2>
            <div className={styles.desktop}>
                <Swiper {...params}>
                    {
                        data.map((item: any) =>
                            <SwiperSlide key={item._key}>
                                <Partner item={item} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
            <div className={styles.mobile}>
                <Slider {...settings}>
                    {
                        data.map((item, index) => (
                            <div
                                key={index}
                                className={index === slideIndex ? `${styles.slide} ${styles.slide_active}` : styles.slide}
                            >
                                <Partner item={item} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default memo(Partners);