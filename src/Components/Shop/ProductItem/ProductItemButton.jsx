import React from 'react';
import {addProductToCart, setIsAddedToCart} from "../../Cart/cartReducer";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAddedToCart} from "../../../Selectors/Selectors";
import * as s from '../ShopStyles'

export const ProductItemButton = ({info}) => {
    const {name, price, img, id} = info
    const dispatch = useDispatch()
    const isAddedToCart = useSelector(state => selectIsAddedToCart(state,id))
    const additionProductToCart = (name, price, img, id) => {
        if(!isAddedToCart){
            dispatch(setIsAddedToCart({id, isAdded: true}))
            dispatch(addProductToCart({name, price, img, id}))
        }
    }
    return <button onClick={() => additionProductToCart(name, price, img, id)} className={isAddedToCart ? 'product-button-active' : 'product-button'}>
        {isAddedToCart ? <s.ProductLinkButton to={'/cart'}>Go to cart</s.ProductLinkButton> : 'add to cart'}
    </button>
}
