import React from 'react';
import {Container} from "../../../GlobalStyledComponents/GlobalComponents";
import styled from "styled-components";
import {PopularProducts} from "./PopularProducts/PopularProducts";

const PopularWrapper = styled.div`
  text-align: center;
`

const PopularTittle = styled.h1`
  padding: 120px 0 80px 0;
   font-size: 40px;
   font-weight: 800;
`

export const Popular = (props) => {
    return (
        <Container>
            <PopularWrapper>
                <PopularTittle>Most Popular Bouquets</PopularTittle>
                <PopularProducts />
            </PopularWrapper>
        </Container>
    );
}
