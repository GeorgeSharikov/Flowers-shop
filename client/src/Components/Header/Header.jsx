import React from 'react';
import {Logo} from "./TopHeader/Logo/Logo.jsx";
import {HeaderSearch} from "./TopHeader/HeaderSearch/HeaderSearch.jsx";
import {CartLogo} from "./TopHeader/CartLogo/CartLogo.jsx";
import { HeaderNavbar } from './HeaderMenu/HeaderNavbar.jsx';
import { useWindowDimensions } from '../../Hooks/useWindowDimensions.jsx';
import { MobileHeaderMenu } from './HeaderMenu/MobileHeaderMenu.jsx';
import * as s from './HeaderStyles.js'

export const Header = (props) => {
  const {width} = useWindowDimensions()
    return (
        <s.HeaderWrapperStyled>
          <s.HeaderContainerStyled width={width}>
              <s.TopHeaderStyled width={width}>
                <Logo />
                <HeaderSearch width={width}/>
                <CartLogo width={width}/>
                {width>580? null : <MobileHeaderMenu />} 
              </s.TopHeaderStyled>
              {width>580
                  ? <s.HeaderMenuStyled>
                        <HeaderNavbar width={width}/>
                    </s.HeaderMenuStyled>
                  : null}
            </s.HeaderContainerStyled>
        </s.HeaderWrapperStyled>
    );
}
