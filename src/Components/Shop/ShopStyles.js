import styled from "styled-components";
import {NavLink} from "react-router-dom";
import diameter from '../../Assets/icon-params-diameter.png'
import weight from '../../Assets/icon-params-weight.png'
import height from '../../Assets/icon-params-height.png'
import Slider from "react-slick";
import arrow from "../../Assets/modal-next.svg";
import heightModal from '../../Assets/height-modal.svg'

//SHOP
export const ShopContentStyled = styled.div`
  padding-top: 25px;
  padding-bottom: 100px;
  h1{
    font-size: 25px;
    color: black;
  }
`

export const ProductListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  align-content: space-between;
  margin-top: 50px;
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
  
  visibility: visible;
  opacity: 1;
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
  min-width: 0;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: ${props => props.isActive ? 'visible' : 'hidden'};
  z-index: 1000;
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  visibility: ${props => props.isActive ? 'visible' : 'hidden'};
  opacity: ${props => props.isActive ? 1: 0};
  transition: all 0.4s ease;
`

export const ModalBody = styled.div`
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  max-width:840px;
  display: grid;
  grid-template-rows: 1fr 33px;
`

export const ModalBodyTopContent = styled.div`
  display: flex;
`

export const ModalCancelButton = styled.button`
    top: 0;
    right: 0;
    background: rgba(30,30,30,.6);
    border: 0;
    border-radius: 0;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
    height: 44px;
    margin: 0;
    padding: 10px;
    position: absolute;
    transition: color .2s;
    vertical-align: top;
    visibility: inherit;
    width: 44px;
    color: #ccc;
`
//Modal Slider
export const StyledSlider = styled(Slider)`
    position: relative;
    .slick-list{ 
              width: 480px;
        height: 640px;
        overflow: hidden;
    }
    .slick-track{
        display: flex;
        cursor: grab;
    }
    .slick-arrow{
        position: absolute;
        top: 320px;
        z-index: 8;
        font-size: 0;
        cursor: pointer;
         border: 3px solid #fff;
        width: 42px;
        height: 42px;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #aaa;
        border-radius: 50%;
        box-sizing: content-box;
    }
    
    .slick-disabled {
        opacity: 0;
        pointer-events:none;
    }
    
    .slick-arrow.slick-prev{
        left: 0;
        transform: rotate(180deg);
        margin: 0 0 0 20px;
        background: rgba(122,122,122,.5) url(${arrow}) no-repeat;
        background-size: 24px 24px;
        background-position: 10px 9px;
    }   
    .slick-arrow.slick-next{
        right: 0;
        background: rgba(122,122,122,.5) url(${arrow}) no-repeat ;
        background-size: 24px 24px;
        margin: 0 20px 0 0;
        background-position: 10px 9px;
    }

    .slick-dots{
      display: flex !important;
      position: absolute;
      top: 5px;
     justify-content: center;
      font-size: 0;
      width: 100%;
      li button{
        border-radius: 20px;
        background: #888;
        cursor: pointer;
        width: 20px;
        height: 20px;
        margin: 0 5px;
        border: 2px solid #fff;
        opacity: .2;
      }
      li.slick-active button{
            opacity: 1;
      }
    }
`

export const HeightModal = styled.div`
    position: absolute;
    background: url(${heightModal}) no-repeat 0 0;
    background-size: 130px 9px;
    background-position-y: 4px;
    width: 130px;
    height: 16px;
    font-size: 15px;
    line-height: 16px;
    text-align: center;
    white-space: nowrap;
    z-index: 1002;
    box-sizing: content-box;
   transform: rotate(270deg);
   left: -50px;
   top: 50%;
`

export const DiameterModal = styled.div`
    position: absolute;
    background: url(${heightModal}) no-repeat 0 0;
    background-size: 130px 9px;
    background-position-y: 4px;
    width: 130px;
    height: 16px;
    font-size: 15px;
    line-height: 16px;
    text-align: center;
    white-space: nowrap;
    z-index: 10020;
    box-sizing: content-box;
    top: 600px;
    left: 168px;
`

export const ModalContent = styled.aside`
  color: #222;
  margin-left: 20px;

`

export const TopModalContent = styled.div`
    padding-bottom: 25px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    h1{
    line-height: 1;
    font-size: 25px;
    margin-top: .2em;
    margin-bottom: 17.500px;
  }
  p{
    font-size: 18px;
  }
`

export const BottomModalContent = styled.div`
  p{
  font-size: 17px;
  }
`

export const ProductPriceModal = styled(ProductPriceStyled)`
  text-align: left;
`

export const PriceWordModal = styled(PriceWord)`
  font-size: 25px;
`

export const ProductFullPriceModal = styled(ProductFullPriceStyled)`
  font-size: 34px;
`

export const ButtonModalCart = styled.button`
    border-radius: 7px;
    margin-top: 15px;
    display: block;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.1rem;
    padding: 8px 30px;
    background-color: ${props => props.isAddedToCart ? '#fff' : '#e55472'};
    border: ${props => props.isAddedToCart ? '2px solid #5da540' : '2px solid #e55472'};  
    cursor: pointer;
    color: ${props => props.isAddedToCart ? '#e55472' : 'white'};
    &:hover{
        background-color: ${props => props.isAddedToCart ? '#eff8ec' : 'hsl(348,74%,58%)'} ;
      border: ${props => props.isAddedToCart ? '2px solid #5da540' : '2px solid hsl(348,74%,58%)'} ;
    }
`

export const ProductLinkButtonModal = styled(ProductLinkButton)`
  display: block;
  width: 100%;
`

export const FavoriteButtonStyled = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  border: 0;
  font: inherit;
  margin: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: inherit;
  line-height: 1.05;
  right: 10px;
  top: 40px;
  span{
     font-size: 0;
  }
`


export const ToggleModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`

//
// back

export const ToggleButtonNext = styled.button`
  width: 160px;
    height: 43px;
    line-height: 41px;
    background-color: #fafafa;
    background-repeat: no-repeat;
    box-sizing: border-box;
    background-size: 24px auto;
    border-radius: 7px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    font-size: 17px;
    cursor: pointer;
    border: 0;
    padding-right: 40px;
    background-image: url(https://www.flower-shop.ru/img/icon-forward-edit.png);
    background-position: 124px 50%;
    text-align: right;
     &:hover{
        background-color: #f5f5f5;
    }
`

export const ToggleButtonPrev = styled.button`
    width: 160px;
    height: 43px;
    line-height: 41px;
    background-color: #fafafa;
    background-repeat: no-repeat;
    box-sizing: border-box;
    background-size: 24px auto;
    border-radius: 7px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    font-size: 17px;
    cursor: pointer;
    border: 0;
    padding-left: 40px;
    background-image: url(https://www.flower-shop.ru/img/icon-back.png);
    background-position: 12px 50%;
    text-align: left;
    &:hover{
        background-color: #f5f5f5;
    }
`

//Rating
export const Start = styled.div`
display: flex;
align-items: baseline;
    position: absolute;
    right: 3%;
    top: 63%;
    &:not(:checked)>input {
      display: none;
    }
    
    &:not(:checked)>label {
      width: 40px;
      cursor: pointer;
      font-size: 30px;
      color: lightgrey;
      text-align: left;
      line-height: 1;
    }
    
    &:not(:checked)>label:before {
      content: '★';
      color: #fde16d;
    }
    span{
      font-size: 20px;
      line-height: 1;
      position: absolute;
      right: 43px;
      top: 6px;
      //padding-right: ${props => props.length >= 2 ? '10px': '5px'};
    }
    sup{
      position: absolute;
      right: 15px;
      top: 22px;
      white-space: nowrap;
    }
`

//Modal Rate
export const ModalRate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  span{
    margin-left:15px;
    font-size: 30px;
  }
`

export const Rating = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
`

export const RatingTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const RatingButton = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  outline: none;
  border: none;
  margin-left: 5px;
  background-color: transparent;  
`
