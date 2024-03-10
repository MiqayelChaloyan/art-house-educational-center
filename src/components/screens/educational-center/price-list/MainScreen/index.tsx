import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Accordion from '../Accordion';

import styles from './MainScreen.module.sass';
import { EDUCATIONAL_CENTER_COURSES } from '../../../../../../sanity/sanity-queries/educational-center';


type MainProps = {
    course: EDUCATIONAL_CENTER_COURSES[]
    isError: boolean
};


const MainScreen: FC<MainProps> = ({ course, isError }) => {
    const { t } = useTranslation();

    return (
        <div id='main-screen' className={styles.screen}>
            <div className={styles.main}>
                <p className={styles.title}>{t('pages.price_list')}</p>
                <div >
                    <Accordion course={course} />
                </div>
            </div>
        </div>
    );
};

export default MainScreen;
