import styled from "styled-components";
// import {NavLink} from "react-router-dom";

//Cart
export const CartStyled = styled.div`
  margin-bottom: 100px;
  user-select: none;
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

