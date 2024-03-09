import { useTranslation } from 'react-i18next';

import Container from '@/components/components/container';

import { ArianAMU } from '@/constants/font';

import styles from './styles.module.sass';



const Header = () => {
    const { t } = useTranslation();
    
    return (
        <div id='about' className={styles.header}>
            <Container>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <div className={styles.watch} />
                    </div>
                    <div className={styles.column}>
                        <div className={styles.art_house_logo} />
                        <p className={`${styles.text} ${ArianAMU.className}`}>
                            {t('texts.main-title')}
                        </p>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.flash_light} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;