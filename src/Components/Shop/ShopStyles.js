import styled from "styled-components";
import {NavLink} from "react-router-dom";
import diameter from '../../Assets/icon-params-diameter.png'
import weight from '../../Assets/icon-params-weight.png'
import height from '../../Assets/icon-params-height.png'

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
  cursor: pointer;
  background-color: #fff;
  margin: 0 auto;
  display: grid;
  border-bottom: 1px solid #eee;  
  width: 240px;
  height: 378px;
  grid-template-rows: 272px 50px auto;
  color: black;
  text-align: center;
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
  .product-button-active{
    position: absolute;
    display: inline-block;
    padding: 5px 11px;
    color: #61ac43;
    font-size: 0.9rem;
    line-height: 1.5em;
    text-transform: uppercase;
    box-shadow: 0 3px 10px rgb(0 0 0 / 10%);
    cursor: pointer;
    appearance: none;
    border: 2px solid #61ac43;
    background-color: #fff;
    border-radius: 7px;
    right: 5px;
    top: 50%;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s ease;
    &:hover{
        background-color: #eff8ec;
        border-color: #5da540;
    }
 }  
  .product-params{
  cursor: text;
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s ease;
    top: 5px;
    width: 218px;
    line-height: 24px;
    font-size: .8em;
    border: 1px solid #eee;
    border-radius: 7px;
    left: 10px;
    span{
      display: inline-block;
      margin-right: .8em;
      background-position: 0 45%;
      background-repeat: no-repeat;
    }
  }
  
  &:hover{
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    border: 1px solid #eee;
    border-radius: 7px;
    z-index: 100;
    padding-bottom: 41px;
    padding-top: 40px;
    .product-button, .product-params, .product-button-active{
       visibility: visible;
       opacity: 1;
    }

}
`

export const DiameterParam = styled.span`
  padding-left: 15px;
  background-image: url(${diameter});
`

export const HeightParam = styled.span`
  padding-left: 15px;
  background-image: url(${height});
`

export const WeightParam = styled.span`
  padding-left: 15px;
  background-image: url(${weight});
`

export const ProductImg = styled.img`
  margin: 10px auto;
  cursor: pointer;
`

export const ProductPriceStyled = styled.div`
  height: 50px;
  text-align: center;
  cursor: text;
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

export const ProductLinkButton = styled(NavLink)`
  text-decoration: none;
  color: #5da540;
`
export const ProductName = styled.button`
  color: black;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.5s ease;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
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

//Modal
export const ModalStyled = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 1000;
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center
`

export const ModalBody = styled.div`
  margin: 0 auto;
  background-color: white;
  width: 300px;
  height: 300px;
  border-radius: 8px;
  padding: 24px;
`