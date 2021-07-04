import React from 'react';
import styled from 'styled-components'
import {FilterBar} from "./FilterBar/FilterBar";
import {Container} from "../../GlobalStyledComponents/GlobalComponents";

export const ShopContent = styled.div`
  padding-top: 25px;
`

export const Shop = (props) => {
    return (
        <Container>
            <ShopContent>
                <FilterBar/>
            </ShopContent>
        </Container>
    );
}
