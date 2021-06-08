import styled from 'styled-components'
import { NavLink } from 'react-router-dom';


const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
`
const activeClassName = "nav-item-active";
const MenuListLink = styled(NavLink).attrs({ activeClassName })`
    text-decoration: none;
    color: black;
    font-size: 20px;
    :hover{
        color: #9932CC;
    }
    &.${activeClassName} {
    border-bottom: 1px solid #BA55D3;
  }
`

export const HeaderNavbar = () => {
    return (
        <NavBar>  
            <div>
                <MenuListLink to='About'>ABOUT</MenuListLink>
            </div>
            <div>
                <MenuListLink to='Shop'>SHOP</MenuListLink>
            </div>
            <div>
                <MenuListLink to='Gallery'>GALLERY</MenuListLink>
            </div>
            <div>
                <MenuListLink to='Blog'>BLOG</MenuListLink>
            </div>
            <div>
                <MenuListLink to='Delivery'>DELIVERY</MenuListLink>
            </div>
        </NavBar>
    )
}