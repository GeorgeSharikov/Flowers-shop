import React from 'react';
import shoppingCard from '../../../../Assets/shopping-cart.svg'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const CartLogo = styled.div`
    display: flex;
    p{
      margin: 0px;
    }
    justify-items: baseline;

`

const CardLogoLink = styled(NavLink)`
    position: relative;
    padding-top: 7px;
    width: 35px;
`

const Sup = styled.sup`
    position: absolute;
    font-size: 12px;
    font-weight: 600;
    height: 20px;
    width: 20px;
    line-height: 20px;
    background-color: #e55472;
    color: #fff;
    text-align: center;
    border-radius: 100%;
    right: 7px;
    top: 0px;
`

const Price = styled.div`
    text-align: center;
`

export const Cart = (props) => {
    return (
        <CartLogo>
            <CardLogoLink to={'cart'}>
                <Sup>1</Sup>
                <img src={shoppingCard} width={'30px'} height={'30px'} alt={''}/>
            </CardLogoLink>
            <p>
                <div><b>Total cost:</b></div>
            <Price>1</Price>
            </p>
        </CartLogo>
    );
}
