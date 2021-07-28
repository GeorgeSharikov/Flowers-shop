import React,{ useState, useEffect } from 'react';
import menu from '../../../Assets/menu-burger.svg'
import * as s from '../HeaderStyles'

export const MobileHeaderMenu = (props) => {
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        document.body.style.overflow = isActive ? 'hidden' : 'auto';
    }, [isActive])

    return (
        <div>
            <s.BurgerMenu onClick={() => setIsActive(!isActive)} show={isActive}>
                <img src={menu} width={'40px'} height={'50px'} alt='menu'/>
            </s.BurgerMenu>
            <s.LinkList show={isActive} onClick={() => setIsActive(false)}>
                <s.MenuListLinkDiv>
                    <s.MobileMenuListLink to='About' onClick={() => setIsActive(false)}>ABOUT</s.MobileMenuListLink>
                </s.MenuListLinkDiv>
                <s.MenuListLinkDiv>
                    <s.MobileMenuListLink to='Shop' onClick={() => setIsActive(false)}>SHOP</s.MobileMenuListLink>
                </s.MenuListLinkDiv>
                <s.MenuListLinkDiv>
                    <s.MobileMenuListLink to='Gallery' onClick={() => setIsActive(false)}>GALLERY</s.MobileMenuListLink>
                </s.MenuListLinkDiv>
                <s.MenuListLinkDiv>
                    <s.MobileMenuListLink to='Blog' onClick={() => setIsActive(false)}>BLOG</s.MobileMenuListLink>
                </s.MenuListLinkDiv>
                <s.MenuListLinkDiv>
                    <s.MobileMenuListLink to='Help' onClick={() => setIsActive(false)}>HELP</s.MobileMenuListLink>
                </s.MenuListLinkDiv>
                </s.LinkList>
        </div>
    )
}


