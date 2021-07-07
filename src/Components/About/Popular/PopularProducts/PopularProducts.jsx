import React from 'react';
import {PopularProduct} from "./PopularProduct";
import * as s from '../../AboutStyle'

export const PopularProducts = (props) => {
    return (
        <s.PopularProductsWrapper>
            <PopularProduct />
            <PopularProduct />
            <PopularProduct />
            <PopularProduct />
        </s.PopularProductsWrapper>
    );
}
