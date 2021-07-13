import React from 'react';
import {Container} from "../../../GlobalStyledComponents/GlobalComponents";
import * as s from '../CartStyles'
import {useDispatch} from "react-redux";
import {addProductToCart, deleteProductFromCart, subtractProductCountInCart} from "../cartReducer";

export const CartItem = ({img, name, starterPrice, count, price, id}) => {
    const dispatch = useDispatch()

    const addToCart = (name, price, img, id) => {
        dispatch(addProductToCart({name, price, img, id}))
    }

    const subtractProductCount = (id) => {
        dispatch(subtractProductCountInCart({id}))
    }

    const deleteProduct = (id) => {
        dispatch(deleteProductFromCart({id}))
    }

    return (
        <Container>
            <s.CartItemStyled>
                <s.CartItemLeftBlockStyled>
                        <img src={img} alt={'flower'}/>
                    <span>{name}</span>
                    <s.CartStarterPriceStyled>
                        {starterPrice.toLocaleString('ru', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0})}
                    </s.CartStarterPriceStyled>
                </s.CartItemLeftBlockStyled>
                <s.CartItemRightBlockStyled>
                    <s.CartItemQuantityStyled>
                        <span onClick={() => subtractProductCount(id)}>-</span>
                        <span>{count}</span>
                        <span onClick={() => addToCart(name, price, img, id)}>+</span>
                    </s.CartItemQuantityStyled>
                    <s.CartItemDeleteStyled onClick={() => deleteProduct(id)}>
                        Delete
                    </s.CartItemDeleteStyled>
                    <s.CartItemPriceStyled>{price.toLocaleString('ru', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0})}</s.CartItemPriceStyled>
                </s.CartItemRightBlockStyled>
            </s.CartItemStyled>
        </Container>
    );
}
