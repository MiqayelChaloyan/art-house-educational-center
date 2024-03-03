import { FC, memo } from 'react';

import Image from 'next/image';

import { useTranslation } from 'react-i18next';

import styles from './styles.module.sass';
import { EDUCATIONAL_CENTER_DEFAULT } from '../../../../../../sanity/sanity-queries/educational-center';
import Container from '@/components/components/container';

type Props = {
    data: EDUCATIONAL_CENTER_DEFAULT[]
};

const About: FC<Props> = ({ data }) => {
    const { t } = useTranslation();
    const { about_us_content } = data[0];
    const content = about_us_content.length <= 1000 ? about_us_content : about_us_content.slice(0, 1000) + '...';

    return (
        <div id='about-us' className={styles.container}>
            <div className={styles.skew} />
            <Container>
                <h1 className={styles.title}>{t('pages.about')}</h1>
                <div className={styles.about_us}>
                    <div className={styles.about_box}>
                        <p>{content}</p>
                    </div>
                    <div className={styles.about_us_img}>
                        <Image
                            src={require('../../../../../../public/assets/images/educational-center/courses.png')}
                            alt='courses'
                            priority
                            className={styles.img_courses}
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