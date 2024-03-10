import React, { FC, memo } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import SlideItem from './SlideItem';

import { urlFor } from '../../../../../../sanity/imageUrlBuilder';

import { EDUCATIONAL_CENTER_COURSES } from '../../../../../../sanity/sanity-queries/educational-center';

import styles from './styles.module.sass';


type Props = {
    course: EDUCATIONAL_CENTER_COURSES;
};


const MainSlider: FC<Props> = ({ course }) => {    
    const items = course.course_main;
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center', duration: 50 }, [Autoplay()]);

    if (!items) {
        return null;
    };

    const slidesItems = items.map((item: any): JSX.Element => {
        const urlForImage = urlFor(item.image)
            .auto('format')
            .fit('max')
            .url();
            
        const content = item.content.length > 272 ? item.content.slice(0, 272) + '...' : item.content;
            
        return (
            <SlideItem
                key={item.slug}
                url={urlForImage}
                title={item.title}
                content={content}
                alt={item.image.alt}
            />
        );
    });

    return (
        <div className={styles.emplay} ref={emblaRef}>
            <div className={styles.emplay_container}>
                {slidesItems}
            </div>
        </div>
    );
};

export default memo(MainSlider);