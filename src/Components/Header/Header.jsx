import React from 'react';
import {Logo} from "./TopHeader/Logo/Logo";
import {HeaderSearch} from "./TopHeader/HeaderSearch/HeaderSearch";
import {Cart} from "./TopHeader/Cart/Cart";
import { HeaderNavbar } from './HeaderMenu/HeaderNavbar';
import { useWindowDimensions } from '../../Hooks/useWindowDimensions';
import { MobileHeaderMenu } from './HeaderMenu/MobileHeaderMenu';
import * as s from './HeaderStyles'

export const Header = (props) => {
  const {width} = useWindowDimensions()
    return (
        <s.HeaderWrapperStyled>
          <s.HeaderContainerStyled width={width}>
              <s.TopHeaderStyled width={width}>
                <Logo />
                <HeaderSearch width={width}/>
                <Cart width={width}/>
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
