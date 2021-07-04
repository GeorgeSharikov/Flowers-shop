import React from 'react';
import styled from "styled-components";
import {PopularProduct} from "./PopularProduct";

const PopularProductsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`


export const PopularProducts = (props) => {
    return (
        <PopularProductsWrapper>
            <PopularProduct />
            <PopularProduct />
            <PopularProduct />
            <PopularProduct />
        </PopularProductsWrapper>
    );
}
