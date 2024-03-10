import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { NextArrow, PrevArrow } from '@/components/ui/react-slick-arrow';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import Container from '@/components/components/container';

import Item from './Item';

import { EDUCATIONAL_CENTER_DEFAULT } from '../../../../../../sanity/sanity-queries/educational-center';

// slick-carousel 
import Slider from 'react-slick';

// slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ArianAMU } from '@/constants/font';

import styles from './styles.module.sass';


type SectionCoursesProps = {
    data: EDUCATIONAL_CENTER_DEFAULT[]
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


const Specialists: FC<SectionCoursesProps> = ({ data }) => {
    const { t } = useTranslation();

    const slidesItems = data[0].specialists_section.map((item: any, index: number) => (
        <Item key={item.slug} item={item} index={index} />
    ));

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        cssEase: 'ease-out',
    };

    return (
        <div id='specialists' className={styles.container}>
            <div className={styles.triangle} />
            <Container>
                <h1 className={`${styles.title} ${ArianAMU.className}`}>{t('pages.specialists')}</h1>
                <div className={styles.specialists}>
                    <Slider {...settings}>
                        {slidesItems}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default memo(Specialists);


