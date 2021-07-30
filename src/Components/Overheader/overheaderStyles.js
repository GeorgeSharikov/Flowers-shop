import styled from 'styled-components'
import {Container} from "../../GlobalStyledComponents/GlobalComponents";
import {NavLink} from "react-router-dom";

export const OverHeaderStyled = styled.div`
   grid-area: overHeader;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   overflow: hidden;
   background: rgba(255,255,255,.95);
   z-index: 999;
   box-shadow: 0 0 15px rgb(0 0 0 / 20%);
   padding: 5px 0;
`

export const OverHeaderContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 44px;
  font-size: 17px;
`

//favorites.jsx

export const FavoritesLink = styled(NavLink)`
  display: flex;
  color: inherit;
  align-items: center;
  padding-right: 5px;
  img{
    padding-right: 3px;
  }
`