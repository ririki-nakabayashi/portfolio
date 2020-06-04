import React from 'react';
import { useSelector } from 'react-redux';
import DesctopNav from './templates/DesctopNav';
import MobileNav from './templates/MobileNav';
import Header from './templates/Header';
import Content from './templates/Content';
import Footer from './templates/Footer';

export default function App() {
  const page = useSelector((state) => state.page);
  return (
    <>
      <DesctopNav />
      <MobileNav />
      {page !== 'TOP' && <Header />}
      <Content />
      {page !== 'TOP' && <Footer />}
    </>
  );
}
