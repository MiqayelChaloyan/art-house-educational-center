import { memo, FC } from 'react';

import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Pagination } from 'swiper/modules';

import Partner from '@/components/ui/parnter';


import { inter } from '@/constants/font';

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import styles from './styles.module.sass';
import useWindowSize from '@/hooks/useWindowSize';
import { ART_HOUSE_HOME } from '../../../../../../sanity/sanity-queries/art-house';

type Props = {
    data: ART_HOUSE_HOME
};

const Partners: FC<Props> = ({ data }) => {
    const { t } = useTranslation();
    const size = useWindowSize();

    const items = data.co_workers.map((item: any) =>
        <SwiperSlide key={item._key}>
            <Partner item={item} />
        </SwiperSlide>
    );

    return (
        <div id="co-workers" className={styles.container}>
            <h2 className={`${styles.title} ${inter.className}`}>{t('section-titles.partners')}</h2>
            <div className={styles.desktop}>
                <Swiper
                    slidesPerView={size.width <= 991 ? 4 : 9}
                    spaceBetween={90}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className={styles.swiper}
                >
                    {items}
                </Swiper>
            </div>
            <div className={styles.mobile}>
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
                    {items}
                </Swiper>
            </div>
        </div>
    );
};

export default memo(Partners);