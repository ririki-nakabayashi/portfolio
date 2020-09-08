/* eslint-disable react/no-danger */
import React, { useCallback } from 'react';
import styled from 'styled-components';
import mediaQuery from 'styled-media-query';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

export default function Products() {
  const products = useSelector((state) => state.products);
  const formatDate = useCallback((target) => (target ? format(new Date(target), 'yyyy-MM') : ''));
  const createMarkup = useCallback((target) => ({ __html: target }), []);
  return (
    <Container>
      {products.map((item) => (
        <ProductWrapper key={item.id}>
          <ProductImageBox><ProductImage alt="productImage" src={item.image.url} /></ProductImageBox>
          <div>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductDesc dangerouslySetInnerHTML={createMarkup(item.desc)} />
            <ProductOption>{item.option}</ProductOption>
            <ProductDate>{`${formatDate(item.startDate)}~${formatDate(item.endDate)}`}</ProductDate>
          </div>
        </ProductWrapper>
      ))}
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

const ProductImageBox = styled.div`
  max-width: 300px;
  margin: 20px 20px 0 0;
  ${mediaQuery.lessThan('medium')`
    width: 100%;
    margin: 0 auto;
  `}
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ProductTitle = styled.h3`
  margin: 0 0 10px 0;
`;

const ProductDesc = styled.div`
  white-space: pre-line;
  margin: 0 0 0 20px;
`;

const ProductOption = styled.p`
  margin: 10px 20px 10px 0;
  font-size: 0.9em;
  color: #444;
`;

const ProductDate = styled.p`
  margin: 10px 20px 10px 0;
  font-size: 0.9em;
  color: #444;
`;
