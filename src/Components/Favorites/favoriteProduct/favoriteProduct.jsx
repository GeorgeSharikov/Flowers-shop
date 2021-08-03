import React from 'react';
import * as s from '../favoritesStyles'
import {ProductItem} from "../../Shop/ProductItem/ProductItem";

export const FavoriteProduct = ({product}) => {
    return (
        <s.FavoriteProduct>
            <ProductItem product={product} isInFavorite={true}/>
        </s.FavoriteProduct>
    );
}
