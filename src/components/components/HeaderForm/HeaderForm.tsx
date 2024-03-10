import Link from 'next/link';
import { Hosts } from '@/constants/hosts';

import Instagram from '@/components/icons/educational-center/Instagram';
import Google from '@/components/icons/educational-center/Google';
import Facebook from '@/components/icons/educational-center/Facebook';

import { ArianAMU } from '@/constants/font';

import styles from './HeaderForm.module.sass';
import useWindowSize from '@/hooks/useWindowSize';


interface Props {
    display?: string,
    color?: string
    justifyContent?: string
    title?: string
    fill?: string
    group?: object
    fontSize?: string
};


const HeaderForm: React.FC<Props> = ({ display, color, justifyContent, fontSize, title, fill, group }) => {
    const window = useWindowSize();

    return (
        <div className={styles.containerForm} style={{ display, justifyContent }}>
            <div style={{ ...group }}>
                <h1 className={`${styles.title} ${ArianAMU.className}`} style={{ color }}>{title}</h1>
            </div>
            <div style={{ ...group }}>
                <Link href={Hosts.facebook} aria-label='Facebook' className={styles.icon} target="_blank">
                    <Facebook
                        width={window.width > 1000 ? 23 : 15}
                        height={window.width > 1000 ? 23 : 15}
                        fill={fill}
                    />
                </Link>
                <Link href={Hosts.instagram} aria-label='Instagram' className={styles.icon} target="_blank">
                    <Instagram
                        width={window.width > 1000 ? 23 : 15}
                        height={window.width > 1000 ? 23 : 15}
                        fill={fill}
                    />
                </Link>
                <Link href={Hosts.google} aria-label='Google' className={styles.icon} target="_blank">
                    <Google
                        width={window.width > 1000 ? 23 : 15}
                        height={window.width > 1000 ? 23 : 15}
                        fill={fill}
                    />
                </Link>
            </div>
        </div>
    );
};

export default HeaderForm;