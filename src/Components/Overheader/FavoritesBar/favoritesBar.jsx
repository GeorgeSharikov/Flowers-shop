import React from 'react';
import * as s from '../overheaderStyles'
import fav from '../../../Assets/favorites.svg'
import {useSelector} from "react-redux";
import {selectFavoriteCount} from "../../../Selectors/Selectors";

export const FavoritesBar = (props) => {
    const favCount = useSelector(state => selectFavoriteCount(state)) || 0
    return (
        <>
            <s.FavoritesLink to={'Favorites'}>
                <img src={fav} alt={'favorites.jsx product'} width={'30px'} height={'30px'}/>
                <span>Favorites</span>
            </s.FavoritesLink>
            <span>({favCount})</span>
        </>
    );
}
