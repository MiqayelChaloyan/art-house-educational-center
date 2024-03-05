import React from 'react';
import Meta from '@/components/seo/art-house-meta';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
	children: React.ReactNode
	headerPosition?: 'fixed' | 'sticky'
};

const ArtHouseLayout: React.FC<LayoutProps> = ({ children, headerPosition }) => {
    return (
        <Meta>
            <div className="wrapper">
                <div className="wrapper-content">
                    <Header typePosition={`${headerPosition === 'fixed' ? 'fixed' : 'sticky'}`} />
                    <main className="wrapper-main">{children}</main>
                </div>
                <Footer />
            </div>
            {/* <ModalLoading /> */}
        </Meta>
    )
}

export default ArtHouseLayout;