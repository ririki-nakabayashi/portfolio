import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Top from '../pages/Top';
import About from '../pages/About';
import Products from '../pages/Products';
import Contact from '../pages/Contact';

export default function Content() {
  const page = useSelector((state) => state.page);
  const switchPage = useMemo(() => {
    switch (page) {
      case 'TOP':
        return <Top />;
      case 'ABOUT':
        return <About />;
      case 'PRODUCTS':
        return <Products />;
      case 'CONTACT':
        return <Contact />;
      default:
        return <Top />;
    }
  }, [page]);
  return (
    <Container>
      {switchPage}
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  width: 100vw;
`;
