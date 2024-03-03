import React from 'react';
import Meta from '@/components/seo/Meta';

import HeaderDefault from './layouts/art-house/Header';
import FooterDefault from './layouts/art-house/Footer';
import { useRouter } from 'next/router';
import ArtHouseLayout from './layouts/art-house/layout';
import EducationalCenterLayout from './layouts/educational-center/layout';
// import ModalLoading from '@/components//components/loading';

// import Header from './Header';
// import Footer from './Footer';

interface LayoutProps {
	children: React.ReactNode
	headerPosition?: 'fixed' | 'sticky'
};

const Layout: React.FC<LayoutProps> = ({ children, headerPosition }) => {
	const router = useRouter();
	const { pathname } = router;

	let content;

	switch (pathname) {
		case '/':
			content = <ArtHouseLayout children={children} headerPosition={headerPosition} />
			break;
		case '/educational-center':
			content = <EducationalCenterLayout children={children} headerPosition={headerPosition}/>
			break;
		case '/design' || '/it-m' || '/language':
			console.log('11111111111111111111');
			break;
		default:
			content = <ArtHouseLayout children={children} headerPosition={headerPosition} />
	}



	return (
		<>
			{content}
		</>
	);
}

export default Layout;