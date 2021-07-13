import React from 'react';
import * as s from '../CartStyles'
import {Container} from "../../../GlobalStyledComponents/GlobalComponents";
import {useDispatch, useSelector} from "react-redux";
import {selectTotalCost, selectTotalToCart} from "../../../Selectors/Selectors";
import {emptyCart} from "../cartReducer";

export const CartData = (props) => {
    const dispatch = useDispatch()

    const total = useSelector(state => selectTotalToCart(state))
    const totalCost = useSelector(state => selectTotalCost(state))
    return (
        <Container>
            <s.CartDataStyled>
                <s.LeftCartDataBlock>
                    <s.AllProductsCount>Products:
                        <span>{total}</span>
                    </s.AllProductsCount>
                    <s.TotalProductsCost>
                        Total cost:
                        <span>
                            {totalCost.toLocaleString('ru', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0})}
                        </span>
                    </s.TotalProductsCost>
                </s.LeftCartDataBlock>
                <s.CleanCartStyled>
                    <s.CleanCartStyled>
                        <s.CleanCartButtonStyled onClick={() => dispatch(emptyCart())}>Empty trash</s.CleanCartButtonStyled>
                    </s.CleanCartStyled>
                </s.CleanCartStyled>
            </s.CartDataStyled>
        </Container>
    );
}
