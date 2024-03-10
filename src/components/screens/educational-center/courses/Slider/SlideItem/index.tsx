import { memo } from 'react';

import { ArianAMU } from '@/constants/font';

import styles from './styles.module.sass';


type Props = {
    url: string;
    title: string;
    content: any;
    alt: string;
};


const SlideItem: React.FC<Props> = ({ url, title, content, alt }) => (
    <div className={styles.emplay_slide} style={{backgroundImage: `url(${url})`}}>
        <div className={styles.box}>
            <div className={styles.contact}>
                <h1 className={`${styles.title} ${ArianAMU.className}`}>{title}</h1>
                <p className={ArianAMU.className}>{content}</p>
            </div>
        </div>
    </div>
);

export default memo(SlideItem);