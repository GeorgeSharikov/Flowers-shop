import styled from 'styled-components'
import {NavLink} from "react-router-dom";

export const NotFoundWrapper = styled.div`
  text-align: center;
    height: 82vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
       color: #e55472;
        font-size: 48px;
    }
    h2{
        font-weight: 600;
        font-size: 28px;
        line-height: 30px;
    }
    p{
        padding-top: 5px;
        font-size: 20px;
    }
`

export const ButtonBack = styled.button`
    margin-top: 20px;
    text-decoration: none;
    appearance: none;
    color: white;
    background-color: #e55472;
    border: 2px solid #e55472;
    border-radius: 7px;
    text-transform: uppercase;
    font-size: 24px;
    &:hover{
        background-color: hsl(348,74%,58%);
        border: 2px solid hsl(348,74%,58%);
    }
`

export const ButtonBackLink = styled(NavLink)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: white;
  padding: 8px 30px;
`