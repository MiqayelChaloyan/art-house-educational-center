import Image from 'next/image';

import { useTranslation } from 'react-i18next';

import Container from '@/components/components/container';

import { inter } from '@/constants/font';
import { ImagePaths } from '@/constants/index';

import styles from './styles.module.sass';


const Header = () => {
    const { t } = useTranslation();

    return (
        <div id="about" className={styles.main}>
            <Container>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <Image
                            src={ImagePaths.ART_HOUSE_HOLDING.watchURL}
                            alt='watch'
                            priority
                            className={styles.watch}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.column}>
                        <Image
                            src={ImagePaths.ART_HOUSE_HOLDING.logoURL}
                            alt='art_house_logo'
                            priority
                            className={styles.art_house_logo}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
                        <p className={`${styles.text} ${inter.className}`}>{t('texts.main-title')}</p>
                    </div>
                    <div className={styles.column}>
                        <Image
                            src={ImagePaths.ART_HOUSE_HOLDING.flashLightURL}
                            alt='flash_light'
                            priority
                            className={styles.flash_light}
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

export default Header;