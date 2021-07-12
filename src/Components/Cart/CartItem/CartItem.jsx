import React from 'react';
import {Container} from "../../../GlobalStyledComponents/GlobalComponents";
import * as s from '../CartStyles'
import {useDispatch} from "react-redux";
import {addProductToCart} from "../cartReducer";

export const CartItem = ({img, name, starterPrice, count, price, id}) => {
    const dispatch = useDispatch()
    const addToCart = (name, price, img, id) => {
        dispatch(addProductToCart({name, price, img, id}))
    }

    return (
        <Container>
            <s.CartItemStyled>
                <s.CartItemLeftBlockStyled>
                        <img src={img} alt={'flower'}/>
                    <span>{name}</span>
                    <s.CartStarterPriceStyled>
                        {starterPrice}₽
                    </s.CartStarterPriceStyled>
                </s.CartItemLeftBlockStyled>
                <s.CartItemRightBlockStyled>
                    <s.CartItemQuantityStyled>
                        <span>-</span>
                        <span>{count}</span>
                        <span onClick={() => addToCart(name, price, img, id)}>+</span>
                    </s.CartItemQuantityStyled>
                    <s.CartItemDeleteStyled>
                        Delete
                    </s.CartItemDeleteStyled>
                    <s.CartItemPriceStyled>{price.toLocaleString('ru', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0})}</s.CartItemPriceStyled>
                </s.CartItemRightBlockStyled>
            </s.CartItemStyled>
        </Container>
    );
}
