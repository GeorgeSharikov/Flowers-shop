import React from 'react';
import * as s from '../ShopStyles'
import {ProductItemButton} from "./ProductItemButton";
import {useDispatch} from "react-redux";
import { getChosenProductAsync } from '../productsReducer';
import {Rating} from "./Rating";
import {FavoriteButton} from "./ProductItemModal/FavoriteButton";


export const ProductItem = ({product, isInFavorite}) => {
    const {name,params,price, img, id, rating, ratingCount} = product


    const dispatch = useDispatch()

    const getChosenProduct = async (id) => {
       await dispatch(getChosenProductAsync(id))
    }
   const productPrice = typeof price === 'string' ? `${price} ₽` : price.toLocaleString('ru', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0})
   return (
        <>
            <s.ProductItemStyled onClick={() => getChosenProduct(id)}>
                <s.ProductImg src={img} alt={'flower'} width={'240px'} height={'272px'}/>
                <s.ProductPriceStyled onClick={(e) => e.stopPropagation()}>
                    <s.PriceWord>Price:</s.PriceWord>
                    <s.ProductFullPriceStyled>{productPrice}</s.ProductFullPriceStyled>
                </s.ProductPriceStyled>
                <s.ProductNameWrapper>
                    <s.ProductName>{name}</s.ProductName>
                </s.ProductNameWrapper>
                <ProductItemButton info={product}/>
                <div className={'product-params'} onClick={(e) => e.stopPropagation()}>
                    {params.diameter && <s.DiameterParam>{params.diameter}</s.DiameterParam>}
                    {params.height && <s.HeightParam>{params.height}</s.HeightParam>}
                    {params.weight && <s.WeightParam>{params.weight}</s.WeightParam>}
                </div>
                <Rating rating={rating} ratingCount={ratingCount}/>
                <FavoriteButton id={id} product={product} isInFavorite={isInFavorite}/>
            </s.ProductItemStyled>
        </>
    );
}
