import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      ©︎force. 2020
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 10px;
  height: 30px;
  width: 100vw;
  text-align: center;
  font-size: 1.4rem;
`;
