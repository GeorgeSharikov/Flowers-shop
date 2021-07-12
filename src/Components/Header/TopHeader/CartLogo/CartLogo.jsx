import React from 'react';
import shoppingCard from '../../../../Assets/shopping-cart.svg'
import * as s from "../../HeaderStyles";
import {useSelector} from "react-redux";
import {selectTotalCost, selectTotalToCart} from "../../../../Selectors/Selectors";

export const CartLogo = ({width}) => {
    const total = useSelector(state => selectTotalToCart(state))
    const totalCost = useSelector(state => selectTotalCost(state))
    return (
        <s.CartLogoStyled>
            <s.CartLogoLinkStyled to={'cart'} width={width}>
                <s.CartSupStyled width={width}>{total}</s.CartSupStyled>
                <img src={shoppingCard} width={width>580? '30px' : '44px'} height={width>580? '30px' : '44px'} alt={''}/>
            </s.CartLogoLinkStyled>
            {width>580 ? <div>
                <b>Total cost:</b>
            <s.CartPriceStyled>{totalCost.toLocaleString('ru', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0})}</s.CartPriceStyled>
            </div> : null}
        </s.CartLogoStyled>
    );
}
