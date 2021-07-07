import React from 'react';
import * as s from '../ShopStyles'

export const ProductItem = ({name,params,price, img}) => {
    return (
        <s.ProductItemStyled>
            <s.ProductImg src={img} alt={'flower'} width={'240px'} height={'272px'}/>
            <s.ProductPriceStyled>
                <s.PriceWord>Price:</s.PriceWord>
                <s.ProductFullPriceStyled>{price}</s.ProductFullPriceStyled>
            </s.ProductPriceStyled>
            <s.ProductNameWrapper>
                <s.ProductName to={'Shop/:id'}>{name}</s.ProductName>
            </s.ProductNameWrapper>
        </s.ProductItemStyled>
    );
}
