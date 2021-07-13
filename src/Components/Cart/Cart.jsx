import React from 'react';
import {useSelector} from "react-redux";
import {selectProductsInfoToCart} from "../../Selectors/Selectors";
import {CartItem} from "./CartItem/CartItem";
import * as s from './CartStyles'
import {EmptyCart} from "./EmptyCart";
import {CartData} from "./CartData/CartData";

export const Cart = (props) => {
    const productsInfo = useSelector(state => selectProductsInfoToCart(state))
    return (
        <s.CartStyled>
            <CartData/>
            {Object.keys(productsInfo).map(i => {
                const item = productsInfo[i]
                return <CartItem key={i} id={item.id} img={item.img} name={item.name} count={item.count}
                                 price={item.price} starterPrice={item.starterPrice}/>
            })}
            {Object.keys(productsInfo).length === 0 && <EmptyCart/>}
        </s.CartStyled>
    );
}
