import React from 'react';
import styled from 'styled-components'
import {Logo} from "./Logo/Logo";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu";
import {Cart} from "./Cart/Cart";

const HeaderWrapper = styled.div`
  grid-area: header;
  grid-template-rows: 180px 50px;
`
const TopHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 100px 100px 1fr 250px;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
`
export const Header = (props) => {
    return (
        <HeaderWrapper>
            <TopHeader >
                <Logo />
                <HeaderMenu />
                <Cart />
            </TopHeader>
        </HeaderWrapper>
    );
}
