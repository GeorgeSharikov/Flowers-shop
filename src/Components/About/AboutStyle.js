import styled from "styled-components";
import Slider from "react-slick";
import arrowl from "../../Assets/sl-arrow_l.svg";
import arrowr from "../../Assets/sl-arrow_r.svg";
import {NavLink} from "react-router-dom";

//SLIDER
export const StyledSlider = styled(Slider)`
    position: relative;
    .slick-list{ 
        overflow: hidden;
    }
    .slick-track{
        display: flex;
    }
    .slick-arrow{
        position: absolute;
        top: 50%;
        z-index: 8;
        font-size: 0;
        width: 30px;
        height: 30px;
        border: none;
        cursor: pointer;
    }
    .slick-arrow.slick-prev{
        left: 0;
        background: no-repeat url(${arrowl});
        background-size: 30px 30px;
        margin: 0 0 0 20px;
    }   
    .slick-arrow.slick-next{
        right: 0;
        background: no-repeat url(${arrowr});
        background-size: 30px 30px;
        margin: 0 20px 0 0;
    }
    .slick-slide{
        
    }
`

export const SliderText = styled.div`
    position: absolute;
    top: 30%;
    left: 0;
    width: 575px;
    height:282px;
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    h1{
        font-size: 72px;
        line-height: 1;
        color: #434343;
        font-weight: 700;
    }
    h6{
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 25px;
        font-weight: 400;
        color:#666;
    }
    p{
        padding-bottom: 25px;
        color:#666;
        font-size: 18px;
    }
`

export const SliderButton = styled.div`
    text-align: center;
    max-width: 120px;
    padding: 12px 0px;
    cursor: pointer;
    border-radius: 50px;
    font-weight: 600;
    background-color: #e55472;
    color: #fff;
    transition: .3s;
    &:hover{
        background-color: #565656;
        color: #fff;
    }
`
export const SliderLink = styled(NavLink)`
    text-decoration: none;
    color: white;
`

//BONUSES
export const BonusesBody = styled.div`
  background-color: white;
  position: relative;
  display: flex;
 justify-content: space-around;
  margin-top: -65px;
  z-index: 9;
  border: 1px solid #f0f0f0;
  width: 100%;
`

export const StyledBonusItem = styled.div`
  padding: 30px 40px;
  display: flex;
  p{
    padding-left: 10px;
    font-size: 18px;
  }
`

//POPULAR PRODUCTS
export const PopularWrapper = styled.div`
  text-align: center;
`

export const PopularTittle = styled.h1`
  padding: 120px 0 80px 0;
   font-size: 40px;
   font-weight: 800;
`

export const PopularProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4 ,1fr);
  justify-items: center;
  grid-gap: 25px;
  margin-bottom: 100px;
  @media(max-width: 1180px){
    grid-template-columns: repeat(2 ,1fr);
  }
   @media(max-width: 672px){
  
    grid-template-columns: repeat(2 ,1fr);
  }
`


export const ProductCart = styled.div`
 @media(max-width: 672px){
    width: 200px;
  }
  text-decoration: none;
  color: white;
  transition: all 0.5s ease;
  position: relative;
  z-index: 100;
  .btn{
    opacity: 0;
    visibility: hidden;
    border-radius: 7px;
    display: block;
    box-sizing: border-box;
    width: 200px;
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
    background-color: #e55472;
    border: 2px solid #e55472;
    cursor: pointer;
    color: white;
    position:absolute;
    top: 146px;
    left: 21.5px;
    transition: all 0.5s ease;
    &:hover{
        background-color: hsl(348,74%,58%);
        border: 2px solid hsl(348,74%,58%);
    }
  }
   .img{
      transition: all 0.5s ease;
   }
  &:hover{
    .img{
      opacity: 0.3;
    }
    .btn{
      visibility: visible;
      opacity: 1;
    }
  }
`
export const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
`

export const ProductLink = styled(NavLink)`
   display: block;
   width: 100%;
  text-decoration: none;
  color: white;
   padding: 8px 30px;
`