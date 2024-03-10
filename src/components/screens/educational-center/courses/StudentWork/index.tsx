import { FC, memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import Image from 'next/image';

import Container from '@/components/components/container';
import Button from '@/components/ui/Button';
import Cancel from '@/components/icons/educational-center/Cancel';

import { urlFor } from '../../../../../../sanity/imageUrlBuilder';

import { EDUCATIONAL_CENTER_COURSES } from '../../../../../../sanity/sanity-queries/educational-center';

// slick-carousel 
import Slider from 'react-slick';

// slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { inter } from '@/constants/font';

import styles from './style.module.sass';


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


type Props = {
    course: EDUCATIONAL_CENTER_COURSES[]
};


const StudentWork: FC<Props> = ({ course }: any) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [initialLoadCourses, setInitialLoadCourses] = useState<number>(8);
    const [isFullscreen, setFullscreen] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const { t } = useTranslation();

    useEffect(() => setInitialLoadCourses(8), [course]);

    const scrollToElement = () => {
        const container: HTMLElement | null = document.getElementById('contact');
        if (container) {
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const images = course.student_works.slice(0, initialLoadCourses).map((item: any) => {

        const urlForImage = urlFor(item)
            .auto('format')
            .fit('max')
            .url();

        return (
            <div
                key={item._key}
                className={`${styles.img_block} ${isFullscreen ? styles.fullscreenContainer : ''}`}
                onClick={() => {
                    setFullscreen(true);
                    setImageUrl(urlForImage);
                }}
            >
                <Image
                    src={urlForImage}
                    alt={item.alt}
                    priority
                    className={styles.work_img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
        );
    });

    const handleLoad = () => setInitialLoadCourses(initialLoadCourses + 4);

    const handleBackLoad = () => setInitialLoadCourses(initialLoadCourses - 4);


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
        <div id='student-work' className={styles.container}>
            <div className={styles.triangle} />
            <Container>
                <h1 className={`${styles.title} ${inter.className}`}>{t('pages.student_work')}</h1>
                <div className={styles.works}>
                    <div className={styles.student_work}>
                        {images}
                    </div>
                    {
                        isFullscreen && (
                            <div className={styles.zoom}>
                                <div>
                                    <button
                                        className={`${styles.close} ${inter.className}`}
                                        title='Close'
                                        onClick={() => setFullscreen(false)}>
                                        <Cancel
                                            width='104'
                                            height='104'
                                            fill='white'
                                        />
                                    </button>
                                </div>
                                <Image
                                    src={imageUrl}
                                    alt='zoom-image'
                                    priority
                                    className={styles.img}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        )
                    }
                    {course.student_works.length < 8 ? (
                        <div className={styles.block_buttons}>
                            <div className={styles.btn_group}>
                                <Button
                                    className={styles.contact_button}
                                    text={t('button.contact-us')}
                                    onClick={scrollToElement}
                                />
                            </div>

                        </div>
                    ) : (
                        <div className={styles.block_buttons}>
                            <div className={styles.btn_group}>
                                <Button
                                    className={`${styles.view_more_button} ${inter.className}`}
                                    text={course.student_works.length > initialLoadCourses ? t('button.view-more') : t('button.show-less')}
                                    onClick={course.student_works.length > initialLoadCourses ? handleLoad : handleBackLoad}
                                />
                            </div>
                            <div className={styles.btn_group}>
                                <Button
                                    className={`${styles.contact_button} ${inter.className}`}
                                    text={t('button.contact-us')}
                                    onClick={scrollToElement}
                                />
                            </div>

                        </div>
                    )}
                </div>
                <div className={styles.slider}>
                    <Slider {...settings}>
                        {
                            images.map((item: any, index: number) => (
                                <div
                                    key={index}
                                    className={index === slideIndex ? `${styles.slide} ${styles.slide_active}` : styles.slide}
                                >
                                    {item}
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default memo(StudentWork);