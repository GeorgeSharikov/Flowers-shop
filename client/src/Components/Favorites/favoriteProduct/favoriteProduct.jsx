import React from 'react';
import * as s from '../favoritesStyles.js'
import {ProductItem} from "../../Shop/ProductItem/ProductItem.jsx";

export const FavoriteProduct = ({product}) => {
    return (
        <s.FavoriteProduct>
            <ProductItem product={product} isInFavorite={true}/>
        </s.FavoriteProduct>
    );
}
