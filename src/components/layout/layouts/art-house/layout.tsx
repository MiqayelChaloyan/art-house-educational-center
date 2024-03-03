import React from 'react';
import Meta from '@/components/seo/Meta';

import HeaderDefault from './Header';
import FooterDefault from './Footer';

interface LayoutProps {
	children: React.ReactNode
	headerPosition?: 'fixed' | 'sticky'
};

const ArtHouseLayout: React.FC<LayoutProps> = ({ children, headerPosition }) => {
    return (
        <Meta>
            <div className="wrapper">
                <div className="wrapper-content">
                    <HeaderDefault typePosition={`${headerPosition === 'fixed' ? 'fixed' : 'sticky'}`} />
                    <main className="wrapper-main">{children}</main>
                </div>
                <FooterDefault />
            </div>
            {/* <ModalLoading /> */}
        </Meta>
    )
}

export default ArtHouseLayout;