import React from 'react';
import * as s from "../../ShopStyles.js";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAddedToCart} from "../../../../Selectors/Selectors.js";
import {addProductToCart, setIsAddedToCart} from "../../../Cart/cartReducer.js";

export const ModalButton = ({product, setIsActive}) => {
    const {name, price, img, id} = product
    const dispatch = useDispatch()

    const isAddedToCart = useSelector(state => selectIsAddedToCart(state,id))

    const goToCartHandler = () => {
        setIsActive(false)
        document.body.style.overflow = 'scroll'
    }

    const additionProductToCart = (name, price, img, id) => {
        if(!isAddedToCart){
            dispatch(setIsAddedToCart({id, isAdded: true}))
            dispatch(addProductToCart({name, price, img, id}))
        }
    }
    return (
        <s.ButtonModalCart isAddedToCart={isAddedToCart} onClick={(e) => additionProductToCart(name, price, img, id, e)} >
            {isAddedToCart ? <s.ProductLinkButtonModal to={'/cart'} onClick={goToCartHandler}>Go to cart</s.ProductLinkButtonModal> : 'add to cart'}
        </s.ButtonModalCart>
    );
}
