import React from 'react';
import styled from 'styled-components'
import {Logo} from "./Logo/Logo";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu";
import {Cart} from "./Cart/Cart";

const HeaderWrapper = styled.div`
  display: grid;
  grid-area: header;
  grid-template-columns: 50px 100px 200px 1fr 250px;
  align-items: center;
`
export const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <HeaderMenu />
            <Cart />
        </HeaderWrapper>
    );
}
