import React from 'react';
import styled from 'styled-components';
import mediaQuery from 'styled-media-query';

export default function Products() {
  return (
    <Container>
      <ProductWrapper>
        <ProductImage>sample-image</ProductImage>
        <div>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
        </div>
      </ProductWrapper>
      <ProductWrapper>
        <ProductImage>sample-image</ProductImage>
        <div>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
        </div>
      </ProductWrapper>
      <ProductWrapper>
        <ProductImage>sample-image</ProductImage>
        <div>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
        </div>
      </ProductWrapper>
      <ProductWrapper>
        <ProductImage>sample-image</ProductImage>
        <div>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
        </div>
      </ProductWrapper>
      <ProductWrapper>
        <ProductImage>sample-image</ProductImage>
        <div>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
        </div>
      </ProductWrapper>
      <ProductWrapper>
        <ProductImage>sample-image</ProductImage>
        <div>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
        </div>
      </ProductWrapper>
      <ProductWrapper>
        <ProductImage>sample-image</ProductImage>
        <div>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
          <p>sample-text</p>
        </div>
      </ProductWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  margin-left: 150px;
  padding: 20px;
  overflow: scroll;
  ${mediaQuery.lessThan('medium')`
    margin-left: 0;
  `}
`;

const ProductWrapper = styled.div`
  display: flex;
  margin-bottom: 60px;
  ${mediaQuery.lessThan('medium')`
    flex-direction: column;
  `}
`;

const ProductImage = styled.div`
  background-color: #444;
  width: 300px;
  height: 200px;
  margin-right: 20px;
  ${mediaQuery.lessThan('medium')`
    width: 100%;
    height: 300px;
    margin-right: 0;
  `}
`;
