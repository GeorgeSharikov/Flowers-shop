import React from 'react';
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const Menu = styled.div`
  display: grid;
  grid-column: 4/5;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
`

const MenuItem = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: black;
  user-select: none;
  transition: font-size .2s;
  &.active{
     color: darkcyan;
     font-size: 24px;
  }
  &:hover{
    font-size: 24px;
  }
`

export const HeaderMenu = (props) => {
    return (
        <Menu>
            <div>
                <MenuItem to={'/about'}>
                    About
                </MenuItem>
            </div>
            <div>
                <MenuItem to={'/flowers'}>
                    Flowers
                </MenuItem>
            </div>
            <div>
                <MenuItem to={'/deliver'}>
                    Deliver
                </MenuItem>
            </div>
            <div>
                <MenuItem to={'/feedback'}>
                    Feedback
                </MenuItem>
            </div>
        </Menu>
    );
}
