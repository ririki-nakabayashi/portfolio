import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import mediaQuery from 'styled-media-query';

export default function DesctopNav() {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const pages = ['TOP', 'ABOUT', 'PRODUCTS', 'CONTACT'];
  const buttons = useMemo(() => pages.map((item) => (
    item === page
      ? <ActiveButton type="button" onClick={() => dispatch({ type: 'PAGE_UPDATE', page: item })}>{item}</ActiveButton>
      : <Button type="button" onClick={() => dispatch({ type: 'PAGE_UPDATE', page: item })}>{item}</Button>
  )), [page]);
  return (
    <Container>
      {buttons}
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 10;
  ${mediaQuery.lessThan('medium')`
    display: none;
  `}
`;

const Button = styled.button`
  opacity: 0.6;
  width: 150px;
  text-align: left;
  margin: 10px 0;
`;

const ActiveButton = styled(Button)`
  opacity: 1;
  margin: 10px 0 10px 20px;
`;
