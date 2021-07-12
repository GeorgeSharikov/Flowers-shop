import React from 'react';
import * as s from '../ShopStyles'
import {NavLink} from "react-router-dom";
import {ProductItemButton} from "./ProductItemButton";


export const ProductItem = (props) => {
    const {name,params,price, img} = props
    return (
        <s.ProductItemStyled>
            <NavLink to={'/:id'}>
                <s.ProductImg src={img} alt={'flower'} width={'240px'} height={'272px'}/>
            </NavLink>
            <s.ProductPriceStyled>
                <s.PriceWord>Price:</s.PriceWord>
                <s.ProductFullPriceStyled>{price}₽</s.ProductFullPriceStyled>
            </s.ProductPriceStyled>
            <s.ProductNameWrapper>
                <s.ProductName to={'Shop/:id'}>{name}</s.ProductName>
            </s.ProductNameWrapper>
            <ProductItemButton info={props}/>
            <div className={'product-params'}>
                {params.diameter && <s.DiameterParam>{params.diameter}</s.DiameterParam>}
                {params.height && <s.HeightParam>{params.height}</s.HeightParam>}
                {params.weight && <s.WeightParam>{params.weight}</s.WeightParam>}
            </div>
        </s.ProductItemStyled>
    );
}
