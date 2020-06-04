import React from 'react';
import styled from 'styled-components';

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
  height: 100%;
  width: 100%;
  margin-left: 150px;
  padding: 20px;
  overflow: scroll;
`;

const ProductWrapper = styled.div`
  display: flex;
`;

const ProductImage = styled.div`
  background-color: #fff;
  width: 300px;
  height: 200px;
  margin-right: 20px;
`;
