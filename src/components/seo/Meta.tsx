import { FC, PropsWithChildren } from 'react';

import { DefaultSeo } from 'next-seo';

const seoTitle = 'Art House Holding';
const seoDescription = 'At Art House, we pride ourselves on being a dynamic training center that offers a diverse array of courses to ignite your passion and elevate your skills.';
const seoUrl = 'https://art-house-holding.vercel.app/en';
const seoOGImage = 'https://mir-s3-cdn-cf.behance.net/projects/404/89da2f34070754.Y3JvcCw5NTgsNzQ5LDk3LDE4.jpg';
const seoOGImageAlt = 'Art House Holding';
const seoSiteName = 'Art House Holding';
const seoLocale = 'en';

const Meta: FC<PropsWithChildren> = ({ children }) => {
	return <>
		<DefaultSeo
			title={seoTitle}
			description={seoDescription}
			canonical={seoUrl}
			openGraph={{
				url: seoUrl,
				title: seoTitle,
				description: seoDescription,
				images: [
					{
						url: seoOGImage,
						width: 500,
						height: 500,
						alt: seoOGImageAlt,
					},
				],
				siteName: seoSiteName,
				type: 'website',
				locale: seoLocale
			}}
		/>
		{children}
	</>;
};

export default Meta;