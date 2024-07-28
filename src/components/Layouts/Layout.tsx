import React from 'react';
import Header from '../Molecules/Header/Header';
import Navigation from '../Molecules/Navigation/Navigation';
import Content from '../Organisms/Content/Content';

const Layout: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
};

export default Layout;