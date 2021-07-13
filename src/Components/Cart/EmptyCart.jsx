import React from 'react';
import * as s from './CartStyles'
import {Container} from "../../GlobalStyledComponents/GlobalComponents";

export const EmptyCart = (props) => {
    return (
        <Container>
            <s.EmptyCartStyled>
                <h2>Your cart is empty</h2>
            </s.EmptyCartStyled>
            <s.EmptyCartButtonStyled>
                <s.EmptyCartLink to={'/Shop'}>back to shop</s.EmptyCartLink>
            </s.EmptyCartButtonStyled>
        </Container>
    );
}
