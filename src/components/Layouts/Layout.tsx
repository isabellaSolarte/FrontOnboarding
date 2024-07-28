import React from 'react';
import Header from '../Molecules/Header/Header';
import Content from '../Organisms/Content/Content';
import Footer from '../Molecules/Footer/Footer';

const Layout: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;