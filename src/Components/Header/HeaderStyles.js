import styled from 'styled-components'
import {Container} from "../../GlobalStyledComponents/GlobalComponents";
import {NavLink} from "react-router-dom";
import {device} from "../../GlobalStyledComponents/MediaQueries";

//HEADER
export const HeaderWrapperStyled = styled.div`
  width: 100%;
  grid-area: header;
`
export const HeaderContainerStyled = styled(Container)`
  display: grid;
  grid-template-rows: 150px 66px;
  @media (max-width: 580px){
    grid-template-rows: 120px;
  }
`
export const TopHeaderStyled = styled.div`
  width: 100%; 
  height: 120px;
  box-sizing: border-box;
  align-items: ${props => props.width> 580 ? 'center' : 'center'}; 
  display: flex;
  justify-content: space-between;
  padding: 15px 0 0 0;
  border-bottom: 1px solid #f0f0f0;
  @media (max-width: 580px){
      border: none;
      padding: 0;
      display: grid;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);
  }
`
export const HeaderMenuStyled = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`


//CART HEADER
export const CartLogoStyled = styled.div`
  grid-column: auto;
    display: flex;
    p{
      margin: 0;
    }
    justify-items: baseline;
    @media(max-width: 580px){
      grid-column: 3/4;
    }
`

export const CartLogoLinkStyled = styled(NavLink)`
    position: relative;
    padding-top: 7px;
    width: ${props => props.width>580 ? '35px' : '30px'};
`

export const CartSupStyled = styled.sup`
  margin-left: 10px;
    position: absolute;
    font-size: 16px;
    font-weight:  ${props => props.width>580 ? '600' : '500'};;
    height: ${props => props.width>580 ? '20px' : '18px'};
    width: ${props => props.width>580 ? '20px' : '18px'};
    line-height: 20px;
    background-color: #e55472;
    color: #fff;
    text-align: center;
    border-radius: 100%;
    top:  ${props => props.width>580 ? '2px' : '10px'};
    right: ${props => props.width>580 ? '7.5px' : '3px'};
`

export const CartPriceStyled = styled.p`
    text-align: center;
`


//HEADER SEARCH
export const SearchBar = styled.div`
  display: flex;
  grid-column: 4/5;
  justify-content: ${props => props.width > 580 ? 'center' : 'right'};
  @media (max-width: 580px){
    grid-column: auto;
  }
`
export const PhoneNumber = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    font-size: 15px;
    width: 180px;
    font-weight: 100;
    margin-right: 20px;
    @media (max-width: 846px){
        display: none
    }
`
export const Form = styled.form`
    position: relative;
    @media (max-width: 580px) {
       display: none
    }
`
export const Input = styled.input`
    width: 460px;
    height: 45px;
    border-radius: 50px;
    border: 1px black solid;
    outline: none;
    padding: 15px 50px 15px 15px;
    box-sizing: border-box;
    font-size: 15px;
    :focus{
        box-shadow:0 0 3px rgba(0,0,0,0.5);
    }
    @media ${device.smallLaptop} {
        width: 300px;
    }
    @media (max-width: 580px) {
       display: none
    }
`
export const Button = styled.button`
    display: block;
    z-index: 10;
    height: 45px;
    width: 50px;
    position: absolute;
    background-color: inherit;
    border: none;
    padding: 0;
    right:0px;
    top: 4px;
    cursor: pointer;
    @media (max-width: 580px) {
       width: 50px
    }
`
export const SearchIcon = styled.div`
    width: 22px;
    padding-left: 20px;
    margin-top: 12px;
    @media (min-width: 580px) {
       display: none;
    }
`

export const SearchList = styled.ul`
    position: absolute;
    top: 48px;
    left: 5%;
    width: 90%;
    background-color: white;
    padding: 0;
    list-style: none;
    border-radius: 7px;
    border: 1px solid #eee;
    box-shadow: 0 3px 10px rgb(0 0 0 / 10%);
    box-sizing: border-box;
    z-index: 100;
    li:nth-child(odd) {
      background-color: #fafafa;
    }
    li{
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        cursor: pointer;
        line-height: 1.3;
        padding: 7px 7px 9px;
        width: 100%;
    }
`

export const SearchListLink = styled.div`
  display: flex;
`

//LOGO HEADER
export const LogoWrapper = styled.div`
  display: grid;
  grid-column: 2/3;
  margin-right: 50px;
  @media (max-width: 580px){
    grid-column: 1/2;
  }
`
export const LogoLink = styled(NavLink)`
  height: 90px;
  width: 90px;
  transition-duration: 500ms;
  
  &:hover{
    transform: scale(1.1, 1.1);
  }
`


// HEADER MENU
export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
`
export const activeClassName = "nav-item-active";
export const MenuListLink = styled(NavLink).attrs({ activeClassName })`
    text-decoration: none;
    color: black;
    font-size: 20px;
    :hover{
        color: #9932CC;
    }
    &.${activeClassName} {
    border-bottom: 1px solid #BA55D3;
  }
`

//MOBILE HEADER MENU
export const BurgerMenu = styled.div`
    grid-column: 4/5;
    margin-top: 13px;
    width: 40px;
    height: 50px;
`
export const LinkList = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    padding: 60px;
    top: 0;
    left: ${props => props.show ? '0' : '-200%'};
    width: 100%; 
    height: 100%;
    background-color: rgba(0,0,0,0.98);
    z-index: 10;
    transition: left 1s ease;
`

export const MenuListLinkDiv = styled.div`
    margin-bottom: 15px;
`

export const MobileMenuListLink = styled(NavLink).attrs({activeClassName})`
    text-decoration: none;
    color: gray;
    font-size: 24px;
    &.${activeClassName} {
       color: white;
 }`