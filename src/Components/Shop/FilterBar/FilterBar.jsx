import React from 'react';
import styled from "styled-components";
import {PageShow} from "./PageShow";
import {Sorting} from "./Sorting";

const FilterWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const FilterBar = (props) => {
    return (
            <FilterWrapper>
                <PageShow />
                <Sorting />
            </FilterWrapper>
    );
}
