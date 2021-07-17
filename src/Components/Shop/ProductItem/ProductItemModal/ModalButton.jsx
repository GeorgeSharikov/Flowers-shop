import React from 'react';
import * as s from "../../ShopStyles";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAddedToCart} from "../../../../Selectors/Selectors";
import {addProductToCart, setIsAddedToCart} from "../../../Cart/cartReducer";

export const ModalButton = ({product}) => {
    const {name, price, img, id} = product
    const dispatch = useDispatch()

    const isAddedToCart = useSelector(state => selectIsAddedToCart(state,id))

    const additionProductToCart = (name, price, img, id) => {
        if(!isAddedToCart){
            dispatch(setIsAddedToCart({id, isAdded: true}))
            dispatch(addProductToCart({name, price, img, id}))
        }
    }
    return (
        <s.ButtonModalCart isAddedToCart={isAddedToCart} onClick={(e) => additionProductToCart(name, price, img, id, e)} >
            {isAddedToCart ? <s.ProductLinkButtonModal to={'/cart'}>Go to cart</s.ProductLinkButtonModal> : 'add to cart'}
        </s.ButtonModalCart>
    );
}
