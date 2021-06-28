import React from 'react';
import styled from 'styled-components'
import {Logo} from "./TopHeader/Logo/Logo";
import {HeaderSearch} from "./TopHeader/HeaderSearch/HeaderSearch";
import {Cart} from "./TopHeader/Cart/Cart";
import { HeaderNavbar } from './HeaderMenu/HeaderNavbar';
import { Container } from '../../GlobalStyledComponents/GlobalComponents';

const HeaderWrapper = styled.div`
  width: 100%;
  grid-area: header;
` 
const HeaderContainer = styled(Container)`
  grid-template-rows: 150px 66px;
`
const TopHeader = styled.div`
  width: 100%; 
  height: 150px;
  box-sizing: border-box;
  align-items: center; 
  display: flex;
  justify-content: space-between;
  padding: 15px 0 0 0;
  border-bottom: 1px solid #f0f0f0;
`
const HeaderMenu = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Header = (props) => {
    return (
        <HeaderWrapper> 
          <HeaderContainer>
              <TopHeader >
                <Logo />
                <HeaderSearch />
                <Cart />
              </TopHeader>
              <HeaderMenu>
                <HeaderNavbar />
              </HeaderMenu>
            </HeaderContainer>
        </HeaderWrapper>
    );
}
