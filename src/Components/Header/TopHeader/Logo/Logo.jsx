import React from 'react';
import logo from "../../../../Assets/site-logo.1.png";
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const LogoWrapper = styled.div`
  display: grid;
  grid-column: 2/3;
  margin-right: 50px;
`
const LogoLink = styled(NavLink)`
  height: 90px;
  width: 90px;
  transition-duration: 500ms;
  
  &:hover{
    transform: scale(1.1, 1.1);
  }
`

export const Logo = (props) => {
    return (
        <LogoWrapper>
            <LogoLink to={'/about'}>
                <img src={logo} alt={''} width={'100%'} height={'100%'}/>
            </LogoLink>
        </LogoWrapper>
    );
}
