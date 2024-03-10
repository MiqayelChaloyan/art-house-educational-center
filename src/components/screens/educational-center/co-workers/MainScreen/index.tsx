import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import Image from 'next/image';

import Container from '@/components/components/container';

import { urlFor } from '../../../../../../sanity/imageUrlBuilder';

import { EDUCATIONAL_CENTER_CO_WORKERS } from '../../../../../../sanity/sanity-queries/educational-center';

import styles from './style.module.sass';

type MainProps = {
    data: EDUCATIONAL_CENTER_CO_WORKERS[]
    isError: boolean
};


const MainScreen: FC<MainProps> = ({ data, isError }) => {
    const { t } = useTranslation();

    const workers = data.map((item: any) => {
        const urlForImage = urlFor(item.logo)
            .auto('format')
            .fit('max')
            .url();

        return (
            <div key={item._id} className={styles.co_worker}>
                <div className={styles.image_container}>
                    <Image
                        src={urlForImage}
                        alt={item.logo.alt || 'co-worker-company-logo'}
                        priority
                        className={styles.image}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <p className={styles.text}>{item.company_name}</p>
                <p className={styles.text}>{item.cooperation}</p>
                <p className={styles.text}>{item.implemented_projects}</p>
            </div>
        );
    });

    return (
        <div id='main-screen' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <h1 className={styles.title}>{t('pages.co-worker')}</h1>
                <div className={styles.workers}>
                    {workers}
                </div>
            </Container>
        </div>
    );
};

export default memo(MainScreen);
