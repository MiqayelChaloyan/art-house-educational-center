import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/hooks/useStore';
import { openModal } from '@/store/stateModalSlice';
// import { openModalLoading } from '@/store/stateLoadingLanguage';

import cn from 'classnames';

import Logo from '@/components/icons/educational-center/Logo';
import Button from '@/components/ui/Button';

import { ArianAMU } from '@/constants/font';

import styles from './styles.module.sass';

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

type IHeaderProps = {
    typePosition: string
};

const Header = ({ typePosition }: IHeaderProps) => {
    const router = useRouter();
    const { pathname, locales, locale: activeLocale } = useRouter();
    const [isSticky, setIsSticky] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
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

    return (
        <header className={cn(
            styles.box,
            `${typePosition === 'fixed' ? styles.boxFixed : ''}`,
            `${isSticky ? styles.boxScrolled : ''}`,
            `${isOpenMenu ? styles.boxOpenMenu : ''}`
        )}>
            <div className={`container ${styles.wrap}`}>
                <Link href='/educational-center' aria-label='home' className={cn(styles.logo, `${isSticky ? styles.logoSticky : ''}`)}>
                    <Logo
                        width='162'
                        height='44'
                        fill='#111111'
                    />
                </Link>
                <div className={cn(
                    styles.content,
                    `${isOpenMenu ? styles.contentShow : ''}`,
                    `${isSticky && isOpenMenu ? styles.contentSticky : ''}`,
                )}>
                    <div className={styles.nav}>
                        <Link href='/educational-center' aria-label='about' className={`${styles.link} ${pathname === '/educational-center' ? styles.linkActive : ''} ${ArianAMU.className}`}>{t('navigation.about')}</Link>
                        <Button
                            text={t('navigation.courses')}
                            onClick={() => {
                                setIsOpenMenu(false);
                                setTimeout(() => dispatch(openModal()), 500);
                            }}
                            className={`${styles.btn} ${ArianAMU.className}`}
                        />
                        <Link href='/educational-center/co-workers' aria-label='co-workers' className={`${styles.link} ${pathname === '/educational-center/co-workers' ? styles.linkActive : ''} ${ArianAMU.className}`}>{t('navigation.co-workers')}</Link>
                        <Link href='/educational-center/price-list' aria-label='price-list' className={`${styles.link} ${pathname === '/educational-center/price-list' ? styles.linkActive : ''} ${ArianAMU.className}`}>{t('navigation.price-list')}</Link>
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
                                        // setTimeout(() => dispatch(openModalLoading()), 2);
                                    }}
                                    style={{ color: activeLocale === locale ? 'red' : 'white' }}
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
