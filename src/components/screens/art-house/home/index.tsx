import { FC } from "react";
import { ART_HOUSE_HOME } from "../../../../../sanity/sanity-queries/art-house";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

import { useTranslation } from 'react-i18next';

type HomeProps = {
	data: ART_HOUSE_HOME
	isError: boolean
};

// const localeStrings: {
// 	am: string
// 	ru: string
// 	en: string
// 	[key: string]: string
// } = {
// 	am: 'Հայ',
// 	ru: 'Рус',
// 	en: 'Eng',
// };

const Home: FC<HomeProps> = ({ data }) => {

	const router = useRouter();
	const { locales, locale: activeLocale } = router;
    const { t } = useTranslation();

	console.log(activeLocale, 'data');

	return (
		<Layout headerPosition='fixed'>
			<Head>
				<title>Art House Holding</title>
				<meta name='description' content='Art House Holding' />
			</Head>
			<h1>Art House Home</h1>
			<h2>{t('navigation.about')}</h2>
		</Layout>
	)
};

export default Home;