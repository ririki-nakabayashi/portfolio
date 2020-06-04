import React from 'react';
import { useSelector } from 'react-redux';
import Nav from './templates/Nav';
import Header from './templates/Header';
import Content from './templates/Content';
import Footer from './templates/Footer';

export default function App() {
  const page = useSelector((state) => state.page);
  return (
    <>
      <Nav />
      {page !== 'TOP' && <Header />}
      <Content />
      {page !== 'TOP' && <Footer />}
    </>
  );
}
