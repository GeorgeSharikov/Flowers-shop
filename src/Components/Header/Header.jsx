import React from 'react';
import styled from 'styled-components'
import {Logo} from "./TopHeader/Logo/Logo";
import {HeaderSearch} from "./TopHeader/HeaderSearch/HeaderSearch";
import {Cart} from "./TopHeader/Cart/Cart";
import { HeaderNavbar } from './HeaderMenu/HeaderNavbar';

const HeaderWrapper = styled.div`
  min-width: 1366px;
  grid-area: header;
  grid-template-rows: 150px 66px;
` 
const TopHeader = styled.div`
  height: 150px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 3.6% 7.3% 7.3% 63.4% 18.3%;//0.10fr 0.11fr 0.11fr 1fr 0.28fr//;3,6% 7,3% 7,3% 63,4% 18,3%;//50px 100px 100px 1fr 250px;
  align-items: center;
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
            <TopHeader >
              <Logo />
              <HeaderSearch />
              <Cart />
            </TopHeader>
            <HeaderMenu>
              <HeaderNavbar />
            </HeaderMenu>
        </HeaderWrapper>
    );
}
