import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import mediaQuery from 'styled-media-query';

export default function MobileNav() {
  const dispatch = useDispatch();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const switchMobileNavOpenClose = useCallback(() => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }, [isMobileNavOpen]);
  const switchPage = useCallback((target) => {
    switchMobileNavOpenClose();
    dispatch({ type: 'PAGE_UPDATE', page: target });
  }, [isMobileNavOpen]);
  return (
    <>
      {isMobileNavOpen && (<Layer />)}
      <Container>
        <ButtonWrapper>
          <LeadButton type="button" onClick={switchMobileNavOpenClose}>{isMobileNavOpen ? '×' : '='}</LeadButton>
          <Button
            type="button"
            style={{ transform: isMobileNavOpen && 'translate(0px, -280px)', opacity: isMobileNavOpen && 1 }}
            onClick={() => switchPage('TOP')}
          >
            TOP
          </Button>
          <Button
            type="button"
            style={{ transform: isMobileNavOpen && 'translate(0px, -210px)', opacity: isMobileNavOpen && 1 }}
            onClick={() => switchPage('ABOUT')}
          >
            ABOUT
          </Button>
          <Button
            type="button"
            style={{ transform: isMobileNavOpen && 'translate(0px, -140px)', opacity: isMobileNavOpen && 1 }}
            onClick={() => switchPage('PRODUCTS')}
          >
            PRODUCTS
          </Button>
          <Button
            type="button"
            style={{ transform: isMobileNavOpen && 'translate(0px, -70px)', opacity: isMobileNavOpen && 1 }}
            onClick={() => switchPage('CONTACT')}
          >
            CONTACT
          </Button>
        </ButtonWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
  transform: translate(0px, 0px);
  ${mediaQuery.lessThan('medium')`
    display: block;
  `}
`;

const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #131313eb;
  z-index: 5;
`;

const ButtonWrapper = styled.button`
  position: relative;
`;

const Button = styled.button`
  opacity: 0;
  position: absolute;
  bottom: 10px;
  right: 10px;
  transition-duration: 0.5s;
  text-align: right;
`;

const LeadButton = styled(Button)`
  opacity: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 20;
  border: solid 1px #fff;
  text-align: center;
`;
