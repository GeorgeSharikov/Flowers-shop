import React from 'react';
import styled from "styled-components";
import {Sorting} from "./Sorting.jsx";

const FilterWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
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
                <Sorting />
            </FilterWrapper>
    );
}
