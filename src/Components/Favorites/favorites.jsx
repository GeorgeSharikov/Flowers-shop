import React from 'react';
import {useSelector} from "react-redux";
import {selectFavoritesProducts} from "../../Selectors/Selectors";
import {Container} from "../../GlobalStyledComponents/GlobalComponents";
import * as s from "../Shop/ShopStyles"
import {FavoriteProduct} from "./favoriteProduct/favoriteProduct";
import {EmptyFavorites} from "./EmptyFavorites";

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
