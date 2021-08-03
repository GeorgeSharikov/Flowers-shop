import React from 'react';
import * as s from '../../ShopStyles'
import favSign from '../../../../Assets/favoriteSign.svg'
import favSignActive from '../../../../Assets/favoriteSignActive.svg'
import {useDispatch, useSelector} from "react-redux";
import {addProductToFavorites, deleteProductFromFavorites} from "../../../Overheader/favoritesReducer";
import {selectIsAddedToFavorites} from "../../../../Selectors/Selectors";
import {DeleteFavoriteProduct} from "../../../Favorites/favoriteProduct/deleteFavoriteProduct";

export const FavoriteButton = ({id, product, isInFavorite}) => {
    const isAdded = useSelector(state => selectIsAddedToFavorites(state, id))
    const dispatch = useDispatch()
    const favoriteHandler = (e) => {
        e.stopPropagation()
        if(isAdded){
            dispatch(deleteProductFromFavorites({id}))
        }else {
            dispatch(addProductToFavorites({product, id}))
        }
    }

    return (
        <s.FavoriteButtonStyled title={'Add to favorites'}>
            {isInFavorite ? <DeleteFavoriteProduct id={id}/>:<img src={isAdded ? favSignActive : favSign} alt={'favorite sign'} onClick={favoriteHandler}/>}
        </s.FavoriteButtonStyled>
    );
}
