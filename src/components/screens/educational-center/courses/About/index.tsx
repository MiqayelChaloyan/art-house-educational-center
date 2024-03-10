import { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import useWindowSize from '@/hooks/useWindowSize';

import Container from '@/components/components/container';
import FormAppointment from '@/components/components/forms';
import HeaderForm from '@/components/components/HeaderForm/HeaderForm';

import { EDUCATIONAL_CENTER_COURSES } from '../../../../../../sanity/sanity-queries/educational-center';

import { inter } from '@/constants/font';

import styles from './style.module.sass';


type Props = {
    course: EDUCATIONAL_CENTER_COURSES[]
};

const group = {
    ['margin']: '0 auto',
};


const About: FC<Props> = ({ course }) => {
    const { about_us_content } = course as any;
    const content = about_us_content.length <= 1000 ? about_us_content : about_us_content.slice(0, 1000) + '...';
    const size = useWindowSize();  
    const { t } = useTranslation();

    return (
        <div id='about-us' className={styles.container}>
            <div className={styles.triangle} />
            <Container>
                <h1 className={`${styles.title} ${inter.className}`}>{t('pages.about_courses')}</h1>
                <div className={styles.about_us}>
                    <div className={styles.left}>
                        <p className={inter.className}>{content}</p>
                    </div>
                    <div className={styles.right}>
                        <FormAppointment width='30%'>
                            <HeaderForm
                                display='flex'
                                color='black'
                                justifyContent='space-around'
                                title={t('contact-us.title')}
                                fill='#111111'
                                // fontSize={size.width >= 991 ? '32px' : '17px'}
                                group={group}
                            />
                        </FormAppointment>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default memo(About);