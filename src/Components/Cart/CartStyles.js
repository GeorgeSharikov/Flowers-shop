import styled from "styled-components";
import {NavLink} from "react-router-dom";
// import {NavLink} from "react-router-dom";

//Cart
export const CartStyled = styled.div`
  margin-bottom: 100px;
  user-select: none;
`

//Cart Data
export const CartDataStyled = styled.div`
  color: black;
  font-size: 18px ;
  width: 70%;
  display: grid;
  align-items: baseline;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto 30px;
`


export const LeftCartDataBlock = styled.div`
  display: grid;
  align-content: space-between;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
`

export const AllProductsCount = styled.div`
    span{
    margin-left: 5px;
    font-size: 22px;
   }
`

export const TotalProductsCost = styled.div`
   span{
    margin-left: 5px;
    font-size: 22px;
   }
`

export const CleanCartStyled = styled.div`
  text-align: end;
  margin-right: 10px;
`

export const CleanCartButtonStyled = styled.div`
    display: inline-block;
    padding: 5px 11px;
    color: #fff;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.5em;
    text-transform: uppercase;
    box-shadow: 0 3px 10px rgb(0 0 0 / 10%);
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #e55472;
    border: 2px solid #e55472 ;
    border-radius: 7px;
    &:hover{
      background-color: hsl(348, 74%, 58%);
    border: 2px solid hsl(348, 74%, 58%);
    }
`

//Cart item
export const CartItemStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  margin: 0 auto;
  font-size: 18px;
  grid-gap: 40px;
  border-top: 1px solid #f0f0f0;
  color: black;
  
`
export const CartItemLeftBlockStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  align-content: center;
  align-items: center;
`

export const CartStarterPriceStyled = styled.div`
  text-align: center;
`

export const CartItemRightBlockStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
`

export const CartItemQuantityStyled = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #f7f7f7;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 20px;
    transition: .3s;
    cursor: pointer;
    span{
        width: 16px;
        text-align: center;
    }
    &:hover{
        background-color: #565656;
        color: #fff;
    }
`

export const CartItemDeleteStyled = styled.button`
    cursor: pointer;
    width: 89px;
    background-color: #f7f7f7;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 20px;
    transition: .3s;
    border: 0;
     outline: none;
    &:hover{
        background-color: #565656;
        color: #fff;
    }
`

export const CartItemPriceStyled = styled.div`
  color: #e55472;
`

//Empty cart

export const EmptyCartStyled = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  padding: 1rem;
`

export const EmptyCartButtonStyled = styled.div`
    margin: 1rem 0 0;
    text-align: center;

`
export const EmptyCartLink = styled(NavLink)`
  text-decoration: none;
  appearance: none;
  color: white;
  background-color: #e55472;
  border: 2px solid #e55472;
  border-radius: 7px;
  text-transform: uppercase;
   font-size: 1.1rem;
   padding: 8px 30px;
    &:hover{
        background-color: hsl(348,74%,58%);
      border: 2px solid hsl(348,74%,58%);
    }
`

