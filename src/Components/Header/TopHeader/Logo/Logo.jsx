import React from 'react';
import logo from "../../../../Assets/site-logo.1.png";
import * as s from '../../HeaderStyles'


export const Logo = (props) => {
    return (
        <s.LogoWrapper>
            <s.LogoLink to={'/about'}>
                <img src={logo} alt={''} width={'100%'} height={'100%'}/>
            </s.LogoLink>
        </s.LogoWrapper>
    );
}
