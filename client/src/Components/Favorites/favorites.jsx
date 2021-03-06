import React from 'react';
import {useSelector} from "react-redux";
import {selectFavoritesProducts} from "../../Selectors/Selectors.js";
import {Container} from "../../GlobalStyledComponents/GlobalComponents.js";
import * as s from "../Shop/ShopStyles.js"
import {FavoriteProduct} from "./favoriteProduct/favoriteProduct.jsx";
import {EmptyFavorites} from "./EmptyFavorites.jsx";

export const Favorites = (props) => {
    const favoritesProducts = useSelector(state => selectFavoritesProducts(state))
    return (
        <Container>
            <h1 style={{fontSize: '25px', color: 'black'}}>Favorites</h1>
            <s.ShopContentStyled>
                {!favoritesProducts.length && <EmptyFavorites />}
                <s.ProductListStyled>
                    {favoritesProducts.map(i => {
                        return <FavoriteProduct key={i.id} product={i} />
                    })}
                </s.ProductListStyled>
            </s.ShopContentStyled>

        </Container>
    );
}
