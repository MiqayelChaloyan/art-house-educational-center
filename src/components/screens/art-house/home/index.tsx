import { FC } from "react";

import Head from "next/head";

import Layout from "@/components/layout/Layout";

import Header from "./Header";
import Branches from "./Branches";
import Progress from "./Progress";
import Partners from "./Partners";

import PageNotFoundError from "../../404";

import { ART_HOUSE_HOME } from "../../../../../sanity/sanity-queries/art-house";

type HomeProps = {
	data: ART_HOUSE_HOME
	isError: boolean
};

const Home: FC<HomeProps> = ({ data, isError }) => {
	const { our_websites, progress_section, co_workers } = data;

	if (!our_websites || !progress_section || !co_workers || isError) {
		return <PageNotFoundError />
	}

	return (
		<Layout headerPosition='fixed'>
			<Head>
				<title>Art House Holding</title>
				<meta name='description' content='Art House Holding' />
			</Head>
			<Header /> 
			<Branches data={our_websites} />
			<Progress data={progress_section} />
			<Partners data={co_workers} />
		</Layout>
	)
};

export default Home;