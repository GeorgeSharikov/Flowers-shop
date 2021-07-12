import React from 'react';
import {useSelector} from "react-redux";
import {selectProductsInfoToCart} from "../../Selectors/Selectors";
import {CartItem} from "./CartItem/CartItem";
import * as s from './CartStyles'

export const Cart = (props) => {
    const productsInfo = useSelector(state => selectProductsInfoToCart(state))
    return (
        <s.CartStyled>
            { Object.keys(productsInfo).map(i => {
                const item = productsInfo[i]
                return <CartItem key={i} id={item.id} img={item.img} name={item.name} count={item.count} price={item.price} starterPrice={item.starterPrice}/>
            })}
        </s.CartStyled>
    );
}
