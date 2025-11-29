import React from 'react';
import Header from './Header';
import Footer from './Footer';


interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      <div>
        {children}
      </div>

      <Footer />  
    </>
  );
};

export default Layout;
