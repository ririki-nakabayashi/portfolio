import React, { useCallback } from 'react';
import styled from 'styled-components';
import mediaQuery from 'styled-media-query';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

export default function Products() {
  const products = useSelector((state) => state.products);
  const formatDate = useCallback((target) => (target ? format(new Date(target), 'yyyy-MM') : ''));
  return (
    <Container>
      {products.map((item) => (
        <ProductWrapper key={item.id}>
          <ProductImageBox><ProductImage alt="productImage" src={item.image.url} /></ProductImageBox>
          <div>
            <p>{item.title}</p>
            <p>{item.desc}</p>
            <p>{item.option}</p>
            <p>{`${formatDate(item.startDate)}~${formatDate(item.endDate)}`}</p>
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
  margin-right: 20px;
  ${mediaQuery.lessThan('medium')`
    width: 100%;
    margin: 0 auto;
  `}
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
