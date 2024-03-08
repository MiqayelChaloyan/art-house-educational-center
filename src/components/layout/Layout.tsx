import React from 'react';

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

interface Props {
  children: React.ReactNode;
  headerPosition?: 'fixed' | 'sticky';
}

const Layout: React.FC<Props> = ({ children, headerPosition }) => {
  const router = useRouter();
  const { pathname } = router;

  let LayoutComponent;

  switch (pathname) {
    case '/':
      LayoutComponent = dynamic(() => import('./layouts/art-house/layout'));
      break;
    case '/educational-center':
      LayoutComponent = dynamic(() => import('./layouts/educational-center/layout'));
      break;
    case '/design':
    case '/it-m':
    case '/language':
      console.log('11111111111111111111');
      break;
    default:
      LayoutComponent = dynamic(() => import('./layouts/art-house/layout'));
  }

  return (
    <>
      {LayoutComponent ? (
        <LayoutComponent headerPosition={headerPosition}>{children}</LayoutComponent>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Layout;
