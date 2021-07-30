import React, {useState} from 'react';
import * as s from '../../ShopStyles'
import favSign from '../../../../Assets/favoriteSign.svg'
import favSignActive from '../../../../Assets/favoriteSignActive.svg'
import {useDispatch} from "react-redux";
import {addProductToFavorites, deleteProductFromFavorites} from "../../../Overheader/favoritesReducer";

export const FavoriteButton = ({id, product}) => {
    const [isAdded, setIsAdded] = useState(false)
    const dispatch = useDispatch()
    const favoriteHandler = (e) => {
        e.stopPropagation()
        setIsAdded(!isAdded)
        if(isAdded){
            dispatch(deleteProductFromFavorites({id}))
        }else {
            dispatch(addProductToFavorites(product))
        }
    }

    return (
        <s.FavoriteButtonStyled onClick={favoriteHandler}>
            <img src={isAdded ? favSignActive : favSign} alt={'favorite sign'}/>
        </s.FavoriteButtonStyled>
    );
}
