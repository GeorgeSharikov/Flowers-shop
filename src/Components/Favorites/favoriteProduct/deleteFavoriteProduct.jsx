import React from 'react';
import del from '../../../Assets/icon-close.png'
import {useDispatch} from "react-redux";
import {deleteProductFromFavorites} from "../../Overheader/favoritesReducer";

export const DeleteFavoriteProduct = ({id}) => {
    const dispatch = useDispatch()
    const deleteHandler = (e) => {
        dispatch(deleteProductFromFavorites({id}))
        e.stopPropagation()
    }
    return (
        <div title={'Remove from favorites'} onClick={deleteHandler}>
            <img src={del} alt={'del'}/>
        </div>
    );
}
