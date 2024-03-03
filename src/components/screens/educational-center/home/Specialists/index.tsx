import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { NextArrow } from '@/components/ui/NextArrow';
import { PrevArrow } from '@/components/ui/PrevArrow';
import Item from './Item';


import styles from './styles.module.sass';

import { EDUCATIONAL_CENTER_DEFAULT } from '../../../../../../sanity/sanity-queries/educational-center';
import Container from '@/components/components/container';

type SectionCoursesProps = {
    data: EDUCATIONAL_CENTER_DEFAULT[]
};

const Specialists: FC<SectionCoursesProps> = ({ data }) => {
    const { t } = useTranslation();

    const slidesItems = data[0].specialists_section.map((item: any, index: number) => (
        <Item key={item.slug} item={item} index={index} />
    ));

    const settings = {
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div id='specialists' className={styles.container}>
            <div className={styles.skew}>
                <div className={styles.title}>
                    {t('pages.specialists')}
                </div>
            </div>
            <Container>
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