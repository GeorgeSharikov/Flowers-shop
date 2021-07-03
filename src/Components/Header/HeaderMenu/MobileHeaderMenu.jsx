import { useState, useEffect } from 'react';
import  styled  from 'styled-components';
import menu from '../../../Assets/menu-burger.svg'
import { NavLink } from 'react-router-dom';


const BurgerMenu = styled.div`
    margin-top: 13px;
    width: 40px;
    height: 50px;
`
const LinkList = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    padding: 60px;
    top: 0;
    left: ${props => props.show ? '0' : '-200%'};
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.98);
    z-index: 10;
    transition: left 1s ease;
`

const MenuListLinkDiv = styled.div`
    margin-bottom: 15px;
`

const activeClassName = "nav-item-active";
const MenuListLink = styled(NavLink).attrs({ activeClassName })`
    text-decoration: none;
    color: gray;
    font-size: 24px;
    &.${activeClassName} {
       color: white;
  }
`
export const MobileHeaderMenu = (props) => {
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        document.body.style.overflow = isActive ? 'hidden' : 'auto';
    }, [isActive])

    return (
        <div>
            <BurgerMenu onClick={() => setIsActive(!isActive)} show={isActive}>
                <img src={menu} width={'40px'} height={'50px'} alt='menu'/>
            </BurgerMenu>
            <LinkList show={isActive} onClick={() => setIsActive(false)}>
                <MenuListLinkDiv>
                <MenuListLink to='About' onClick={() => setIsActive(false)}>ABOUT</MenuListLink>
            </MenuListLinkDiv>
            <MenuListLinkDiv>
                <MenuListLink to='Shop' onClick={() => setIsActive(false)}>SHOP</MenuListLink>
            </MenuListLinkDiv>
            <MenuListLinkDiv>
                <MenuListLink to='Gallery' onClick={() => setIsActive(false)}>GALLERY</MenuListLink>
            </MenuListLinkDiv>
            <MenuListLinkDiv>
                <MenuListLink to='Blog' onClick={() => setIsActive(false)}>BLOG</MenuListLink>
            </MenuListLinkDiv>
            <MenuListLinkDiv>
                <MenuListLink to='Delivery' onClick={() => setIsActive(false)}>DELIVERY</MenuListLink>
            </MenuListLinkDiv>
            </LinkList>
        </div>
    )
}


