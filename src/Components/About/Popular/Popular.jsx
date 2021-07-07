import React from 'react';
import {Container} from "../../../GlobalStyledComponents/GlobalComponents";
import {PopularProducts} from "./PopularProducts/PopularProducts";
import * as s from '../AboutStyle'


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
