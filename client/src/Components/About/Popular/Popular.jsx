import React from 'react';
import {Container} from "../../../GlobalStyledComponents/GlobalComponents.js";
import {PopularProducts} from "./PopularProducts/PopularProducts.jsx";
import * as s from '../AboutStyle.js'


export const Popular = (props) => {
    return (
        <Container>
            <s.PopularWrapper>
                <s.PopularTittle>Most Popular Bouquets</s.PopularTittle>
                <PopularProducts />
            </s.PopularWrapper>
        </Container>
    );
}
