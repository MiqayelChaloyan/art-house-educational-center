import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Link as ScrollLink } from 'react-scroll';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { openModalLoading } from '@/store/stateLoaderLanguage';
import { useAppDispatch } from '@/hooks/useStore';

import Logo from '@/components/icons/art-house/Logo';

import { ArianAMU } from '@/constants/font';

import cn from 'classnames';

import styles from './styles.module.sass';

type IHeaderProps = {
    typePosition: string
};

const localeStrings: {
    am: string
    ru: string
    en: string
    [key: string]: string
} = {
    am: 'Հայ',
    ru: 'Рус',
    en: 'Eng',
};

const Header = ({ typePosition }: IHeaderProps) => {
    const router = useRouter();
    const { pathname, locales, locale: activeLocale } = useRouter();
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const [linkActive, setLinkActive] = useState<string>('about');
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const ensureStringInArray = (arr: any, str: any) => {
        if (!arr.includes(str)) {
            arr.push(str);
        }
        return arr;
    };

    const otherLocales = ensureStringInArray(locales, 'en');

    const changeLocale = (locale: string) => document.cookie = `NEXT_LOCALE=${locale}`;

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenuClick = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    const handleActiveLink = (activeLink: string) => {
        setLinkActive(activeLink);
        setIsOpenMenu(false);
    };

    return (
        <header className={cn(
            styles.box,
            `${typePosition === 'fixed' ? styles.boxFixed : ''}`,
            `${isSticky ? styles.boxScrolled : ''}`,
            `${isOpenMenu ? styles.boxOpenMenu : ''}`
        )}>
            <div className={`container ${styles.wrap}`}>
                <Link href='/' aria-label='home' className={cn(styles.logo, `${isSticky ? styles.logoSticky : ''}`)}>
                    <Logo
                        width='212'
                        height='60'
                        fill='#111111'
                    />
                </Link>
                <div className={cn(
                    styles.content,
                    `${isOpenMenu ? styles.contentShow : ''}`,
                )}>
                    <div className={styles.nav}>
                        <ScrollLink to="about" smooth={true} duration={500} className={`${styles.link} ${linkActive === 'about' ? styles.linkActive : ''} ${ArianAMU.className}`} onClick={() => handleActiveLink('about')}>{t('navigation.about')}</ScrollLink>
                        <ScrollLink to="branches" smooth={true} duration={500} className={`${styles.link} ${linkActive === 'branches' ? styles.linkActive : ''} ${ArianAMU.className}`} onClick={() => handleActiveLink('branches')}>{t('navigation.branches')}</ScrollLink>
                        <ScrollLink to="co-workers" smooth={true} duration={500} className={`${styles.link} ${linkActive === 'co-workers' ? styles.linkActive : ''} ${ArianAMU.className}`} onClick={() => handleActiveLink('co-workers')}>{t('navigation.co-workers')}</ScrollLink>
                    </div>
                    <div>
                        {otherLocales.map((locale: any, localeIndex: number) => {
                            const { pathname, query } = router;

                            return (
                                <Link
                                    key={localeIndex}
                                    href={{ pathname, query }}
                                    locale={locale}
                                    onClick={() => {
                                        setIsOpenMenu(false);
                                        changeLocale(locale);
                                        setTimeout(() => dispatch(openModalLoading()), 2);
                                    }}
                                    style={{ color: activeLocale === locale ? 'black' : '#B21B1B' }}
                                    className={`${styles.language} ${ArianAMU.className}`}
                                >
                                    {localeStrings[locale]}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <button
                    className={cn(
                        styles.menuBtn,
                        `${isOpenMenu ? styles.menuBtnActive : ''}`,
                    )}
                    onClick={toggleMenuClick}
                    title='Art Training Center Menu'
                ><span></span></button>
            </div>
        </header>
    );
};

export default Header;
