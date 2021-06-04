import React from 'react';
import styled from 'styled-components'
import {CallOutlined, SearchOutlined} from '@material-ui/icons'

const styles = {
    fontSize: 25,
    marginTop: 10,
    marginRight: 10
}

const SearchBar = styled.div`
  display: flex;
  grid-column: 4/5;
  margin-right: 15px;
  justify-content: center;
  position: relative;
`
const PhoneNumber = styled.div`
    text-align: left;
    width: 150px;
    font-weight: 100;
    margin-right: 20px;
`
const Input = styled.input`
    margin-right: 50px;
    width: 500px;
    height: 45px;
    border-radius: 50px;
    border: 1px black solid;
    outline: none;
    padding: 15px;
    box-sizing: border-box;
    font-size: 15px;
`
const Button = styled.button`
    height: 45px;
    width: 20px;
    position: absolute;
    background-color: transparent;
    border: none;
    padding: 0px;
    right:90px;
    top:3px;
    cursor: pointer;
`


export const HeaderMenu = (props) => {
    return (
        <SearchBar>
                <CallOutlined style={styles}/>
                <PhoneNumber >
                    PHONE: <br />      
                    +7(909)-666-66-66
                </PhoneNumber>
                <form onClick={(e) => e.preventDefault()}>
                    <Input placeholder={'Search'} maxLength='50'/>
                    <Button>
                            <SearchOutlined />              
                    </Button>
                </form>
        </SearchBar>
    );
}
