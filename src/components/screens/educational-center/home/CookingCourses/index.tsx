import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import Container from '@/components/components/container';

import Courses from './Courses';

import { EDUCATIONAL_CENTER_DEFAULT } from '../../../../../../sanity/sanity-queries/educational-center';

import { ArianAMU } from '@/constants/font';

import styles from './styles.module.sass';


type Props = {
    data: EDUCATIONAL_CENTER_DEFAULT[]
};


const CookingCourses: FC<Props> = ({ data }) => {
    const newsItems = data[0].news_section.slice(0, 3);
    const { t } = useTranslation();

    if (!newsItems) {
        return null;
    };

    return (
        <div id='cooking-courses' className={styles.container}>
            <div className={styles.triangle} />
            <Container>
                <h1 className={`${styles.title} ${ArianAMU.className}`}>{t('pages.news')}</h1>
                <div className={styles.cooking_courses}>
                    <Courses data={newsItems} />
                </div>
            </Container>
        </div>
    );
};

export default memo(CookingCourses);