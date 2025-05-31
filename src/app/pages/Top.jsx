import React from 'react';
import styled from 'styled-components';

export default function Top() {
  return (
    <Container>
      <Title>force.</Title>
      <Desc>portfolio site created by ririki</Desc>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin-top: 60px;
`;

const Title = styled.div`
  font-size: 6.4rem;
`;

const Desc = styled.div`
  font-size: 1.6rem;
`;
