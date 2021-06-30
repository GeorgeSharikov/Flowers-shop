import React from 'react';
import styled from 'styled-components'
import {CallOutlined, SearchOutlined} from '@material-ui/icons'
import { device } from './../../../../GlobalStyledComponents/MediaQueries';


const styles = {
    fontSize: 25,  
    marginTop: 10,
    marginRight: 10
}

const SearchBar = styled.div`
  display: flex;
  grid-column: 4/5;
  justify-content: ${props => props.width > 580 ? 'center' : 'right'};
`
const PhoneNumber = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    font-size: 15px;
    width: 180px;
    font-weight: 100;
    margin-right: 20px;
    @media (max-width: 846px){
        display: none
    }
`
const Form = styled.form`
    position: relative;
    @media (max-width: 580px) {
       display: none
    }
` 
const Input = styled.input`
    width: 460px;
    height: 45px;
    border-radius: 50px;
    border: 1px black solid;
    outline: none;
    padding: 15px;
    padding-right: 50px;
    box-sizing: border-box;
    font-size: 15px;
    :focus{
        box-shadow:0 0 3px rgba(0,0,0,0.5);
    }
    @media ${device.smallLaptop} {
        width: 300px;
    }
    @media (max-width: 580px) {
       display: none
    }
`
const Button = styled.button`
    display: block;
    z-index: 10;
    height: 45px;
    width: 40px;
    position: absolute;
    background-color: inherit;
    border: none;
    padding: 0px 5px;
    right:6px;
    top: 2px;
    cursor: pointer;
    @media (max-width: 580px) {
       width: 50px
    }
`
const SearchIcon = styled.div`
    width: 22px;
    padding-left: 20px;
    margin-top: 12px;
    @media (min-width: 580px) {
       display: none;
    }
`

export const HeaderSearch = ({width}) => {
    const stylesSearch  = {
        fontSize: width>580 ? 25 : 47,
    }
    return (
        <SearchBar width={width}>
                <PhoneNumber >
                    <CallOutlined style={styles}/>
                    <div>
                        PHONE: <br />      
                        +7(909)-666-66-66                        
                    </div>
                </PhoneNumber>
                <SearchIcon>
                    {width>580 ? null : <SearchOutlined style={stylesSearch}/>}
                </SearchIcon>
                <Form onClick={(e) => e.preventDefault()}>
                    <Input placeholder={'Search'} maxLength='50'/>
                    <Button>
                            <SearchOutlined style={stylesSearch}/>              
                    </Button>
                </Form>
        </SearchBar>
    );
}
