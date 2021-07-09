import React from 'react';
import * as s from '../ShopStyles'
import {NavLink} from "react-router-dom";
import {ProductItemButton} from "./ProductItemButton";

export const ProductItem = ({name,params,price, img}) => {
    return (
        <s.ProductItemStyled>
            <NavLink to={'Shop/:id'}>
                <s.ProductImg src={img} alt={'flower'} width={'240px'} height={'272px'}/>
            </NavLink>
            <s.ProductPriceStyled>
                <s.PriceWord>Price:</s.PriceWord>
                <s.ProductFullPriceStyled>{price}</s.ProductFullPriceStyled>
            </s.ProductPriceStyled>
            <s.ProductNameWrapper>
                <s.ProductName to={'Shop/:id'}>{name}</s.ProductName>
            </s.ProductNameWrapper>
            <ProductItemButton />
            <div className={'product-params'}>
                <span>{params[0]}</span>
                <span>{params[1]}</span>
                <span>{params[2]}</span>
            </div>
        </s.ProductItemStyled>
    );
}
