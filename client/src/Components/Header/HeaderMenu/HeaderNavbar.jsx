import React from 'react';
import * as s from '../HeaderStyles.js'

export const HeaderNavbar = () => {
    return (
        <s.NavBar>  
            <div>
                <s.MenuListLink to='About'>ABOUT</s.MenuListLink>
            </div>
            <div>
                <s.MenuListLink to='Shop'>SHOP</s.MenuListLink>
            </div>
            <div>
                <s.MenuListLink to='Gallery'>GALLERY</s.MenuListLink>
            </div>
            <div>
                <s.MenuListLink to='Blog'>BLOG</s.MenuListLink>
            </div>
            <div>
                <s.MenuListLink to='Help'>HELP</s.MenuListLink>
            </div>
        </s.NavBar>
    )
}