import styled from "styled-components";
import {NavLink} from "react-router-dom";


//SHOP
export const ShopContentStyled = styled.div`
  padding-top: 25px;
  padding-bottom: 100px;
`

export const ProductListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  align-content: space-between;
  margin-top: 50px;
  /* row-gap: 16px; */
  column-gap: 36px;
  @media (max-width: 1100px){
    grid-template-columns: repeat(3,1fr);
  }
  @media (max-width: 820px){
    grid-template-columns: repeat(2,1fr);
  }
  @media (max-width: 520px){
    grid-template-columns: 1fr;
  }
`

export const ProductItemStyled = styled.div`
  position: relative;
  background-color: #fff;
  margin: 0 auto;
  display: grid;
  border-bottom: 1px solid #eee;  
  width: 240px;
  height: 378px;
  grid-template-rows: 272px 50px auto;
  color: black;
  align-content: center;
  box-sizing: border-box;
  padding: 16px 0px;
  transition: box-shadow .2s linear;
  .product-button{
    position: absolute;
    display: inline-block;
    padding: 5px 11px;
    color: #fff;
    font-size: 0.9rem;
    line-height: 1.5em;
    text-transform: uppercase;
    box-shadow: 0 3px 10px rgb(0 0 0 / 10%);
    cursor: pointer;
    appearance: none;
    background-color: #61ac43;
    border: 2px solid #61ac43;
    border-radius: 7px;
    right: 5px;
    top: 50%;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s ease;
    &:hover{
        background-color: #5da540;
        border-color: #5da540;
    }
  }
  
  .product-params{
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s ease;
    top: 5px;
  }
  
  &:hover{
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    border: 1px solid #eee;
    border-radius: 7px;
    z-index: 100;
    padding-bottom: 41px;
    padding-top: 40px;
    .product-button, .product-params{
       visibility: visible;
       opacity: 1;
    }

}
`

export const ProductImg = styled.img`
  margin: 10px auto;
`

export const ProductPriceStyled = styled.div`
  height: 50px;
  text-align: center;
`
export const PriceWord = styled.span`
  margin-right: .4rem;
`
export const ProductFullPriceStyled = styled.span`
   font-size: 25.6px;
   line-height: 50px;
   vertical-align: middle;
`

export const ProductNameWrapper = styled.div`
  height: 56px;
  box-sizing: content-box;
  margin-bottom: 16px;  
  text-align: center;
`

export const ProductName = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.5s ease;
  &:hover{
    color: #BA55D3;
    border-bottom: 1px solid #BA55D3;
  }
`

export const loadingDiv = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1/5;
`