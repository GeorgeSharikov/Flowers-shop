import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";


const ProductLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  transition: all 0.5s ease;
  &:hover{
    background-color: rgba(0,0,0, 0.8);
  }
`
const Product = styled.div`
  display: flex;
   justify-content: center;
  align-items: center;
  width: 270px;
  height: 299px;
  border: 1px solid black;
  cursor: pointer;
`

export const PopularProduct = ({info}) => {
    console.log(info)
    return (
            <ProductLink to={'Shop'}>
                <Product>
                   Go To Shop
                </Product>
            </ProductLink>
    );
}
