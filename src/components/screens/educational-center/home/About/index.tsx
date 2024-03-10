import { FC, memo } from 'react';

import Image from 'next/image';

import { useTranslation } from 'react-i18next';

import Container from '@/components/components/container';

import { EDUCATIONAL_CENTER_DEFAULT } from '../../../../../../sanity/sanity-queries/educational-center';

import { ImagePaths } from '@/constants';
import { ArianAMU } from '@/constants/font';

import styles from './styles.module.sass';


type Props = {
    data: EDUCATIONAL_CENTER_DEFAULT[]
};


const About: FC<Props> = ({ data }) => {
    const { t } = useTranslation();
    const { about_us_content } = data[0];

    const content = about_us_content.length <= 1000 ?
        about_us_content : about_us_content.slice(0, 1000) + '...';

    return (
        <div id='about-us' className={styles.container}>
            <div className={styles.triangle} />
            <Container>
                <h1 className={`${styles.title} ${ArianAMU.className}`}>{t('pages.about')}</h1>
                <div className={styles.about_us}>
                    <div className={styles.box}>
                        <p className={ArianAMU.className}>{content}</p>
                    </div>
                    <div className={styles.box}>
                        <Image
                            src={ImagePaths.ART_EDUCATIONAL_CENTER.aboutUsURL}
                            alt='courses'
                            priority
                            className={styles.image_courses}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default memo(About);