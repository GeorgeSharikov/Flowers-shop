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
  row-gap: 16px;
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
margin: 0 auto;
  display: grid;
  border-bottom: 1px solid #eee;
  width: 240px;
  height: 378px;
  grid-template-rows: 272px 50px auto;
  color: black;
  align-content: center;
  box-sizing: border-box;
  &:hover{
    border: 1px solid white;
    box-shadow: 0 0 10px rgb(238, 238, 238);
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