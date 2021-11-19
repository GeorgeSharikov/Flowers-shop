import React from 'react';
import {addProductToCart, setIsAddedToCart} from "../../Cart/cartReducer.js";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAddedToCart} from "../../../Selectors/Selectors.js";
import * as s from '../ShopStyles.js'

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

    const clickHandler = (name, price, img, id, event) => {
        additionProductToCart(name, price, img, id)
        event.stopPropagation()
    }
    return <button onClick={(e) => clickHandler(name, price, img, id, e)} className={isAddedToCart ? 'product-button-active' : 'product-button'}>
        {isAddedToCart ? <s.ProductLinkButton to={'/cart'}>Go to cart</s.ProductLinkButton> : 'add to cart'}
    </button>
}
