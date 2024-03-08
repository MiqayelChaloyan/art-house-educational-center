import React from 'react';
import Meta from '@/components/seo/art-house-meta';

import Header from './Header';
import Footer from './Footer';

interface Props {
    children: React.ReactNode
    headerPosition?: 'fixed' | 'sticky'
};

const color = 'var(--color-white)';

const ArtHouseLayout: React.FC<Props> = ({ children, headerPosition }) => {
    return (
        <Meta>
            <div className="wrapper" style={{ backgroundColor: color }}>
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