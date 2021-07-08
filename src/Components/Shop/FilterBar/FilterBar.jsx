import React from 'react';
import styled from "styled-components";
import {PageShow} from "./PageShow";
import {Sorting} from "./Sorting";

const FilterWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   @media(max-width: 420px){
      flex-direction: column;
      &:first-child{
        margin-bottom: 8px;
      }
   }
`

export const FilterBar = (props) => {
    return (
            <FilterWrapper>
                <PageShow />
                <Sorting />
            </FilterWrapper>
    );
}
