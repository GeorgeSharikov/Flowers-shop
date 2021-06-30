import React from 'react';
import styled from 'styled-components'
import {Logo} from "./TopHeader/Logo/Logo";
import {HeaderSearch} from "./TopHeader/HeaderSearch/HeaderSearch";
import {Cart} from "./TopHeader/Cart/Cart";
import { HeaderNavbar } from './HeaderMenu/HeaderNavbar';
import { Container } from '../../GlobalStyledComponents/GlobalComponents';
import { useWindowDimensions } from './../../Hooks/useWindowDimensions';
import { MobileHeaderMenu } from './HeaderMenu/MobileHeaderMenu';

const HeaderWrapper = styled.div`
  width: 100%;
  grid-area: header;
` 
const HeaderContainer = styled(Container)`
  display: grid;
  grid-template-rows: 150px 66px;
  /* background-color: ${props => props.width> 580 ? 'white' : 'gray'}; */
  @media (max-width: 580px){
    grid-template-rows: 120px;
  }
`
const TopHeader = styled.div`
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
      padding: 0px;
  }
`
const HeaderMenu = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Header = (props) => {
  const {width} = useWindowDimensions()
    return (
        <HeaderWrapper> 
          <HeaderContainer width={width}>
              <TopHeader width={width}>
                <Logo />
                <HeaderSearch width={width}/>
                <Cart width={width}/>
                {width>580? null : <MobileHeaderMenu />} 
              </TopHeader>
              {width>580 ? <HeaderMenu>
                <HeaderNavbar width={width}/>
              </HeaderMenu> : null}
            </HeaderContainer>
        </HeaderWrapper>
    );
}
