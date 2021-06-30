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
    width: ${props => props.width ? '35px' : '30px'};
`

const Sup = styled.sup`
    position: absolute;
    font-size: ${props => props.width ? '12px' : '16px'};
    font-weight: 600;
    height: ${props => props.width ? '20px' : '22px'};
    width: ${props => props.width ? '20px' : '22px'};
    line-height: ${props => props.width ? '20px' : 'none'};
    background-color: #e55472;
    color: #fff;
    text-align: center;
    border-radius: 100%;
    top:  ${props => props.width ? '0px' : '8px'};
    right: ${props => props.width ? '7.5px' : '-7px'};
`

const Price = styled.div`
    text-align: center;
`

export const Cart = ({width}) => {
    return (
        <CartLogo>
            <CardLogoLink to={'cart'} width={width>580}>
                <Sup width={width>580}>1</Sup>
                <img src={shoppingCard} width={width>580? '30px' : '44px'} height={width>580? '30px' : '44px'} alt={''}/>
            </CardLogoLink>
            {width>580 ? <p>
                <div><b>Total cost:</b></div>
            <Price>1</Price>
            </p> : null}
        </CartLogo>
    );
}
