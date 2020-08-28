import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DesctopNav from './templates/DesctopNav';
import MobileNav from './templates/MobileNav';
import Header from './templates/Header';
import Content from './templates/Content';
import Footer from './templates/Footer';
import { getCMSData } from './api';

export default function App() {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      const carrer = await getCMSData('carrer');
      const products = await getCMSData('products');
      const profile = await getCMSData('profile');
      dispatch({ type: 'SET_CARRER', carrer: carrer.data.contents });
      dispatch({ type: 'SET_PRODUCTS', products: products.data.contents });
      dispatch({ type: 'SET_PROFILE', profile: profile.data });
    };
    fetch();
  }, []);
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
