import React from 'react';
import shoppingCard from '../../../../Assets/shopping-cart.svg'
import * as s from "../../HeaderStyles";

export const CartLogo = ({width}) => {
    return (
        <s.CartLogoStyled>
            <s.CartLogoLinkStyled to={'cart'} width={width}>
                <s.CartSupStyled width={width}>1</s.CartSupStyled>
                <img src={shoppingCard} width={width>580? '30px' : '44px'} height={width>580? '30px' : '44px'} alt={''}/>
            </s.CartLogoLinkStyled>
            {width>580 ? <div>
                <b>Total cost:</b>
            <s.CartPriceStyled>1</s.CartPriceStyled>
            </div> : null}
        </s.CartLogoStyled>
    );
}
