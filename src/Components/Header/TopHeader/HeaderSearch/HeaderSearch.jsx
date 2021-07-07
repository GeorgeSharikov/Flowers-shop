import React from 'react';
import {CallOutlined, SearchOutlined} from '@material-ui/icons'
import * as s from '../../HeaderStyles'

const styles = {
    fontSize: 25,
    marginTop: 10,
    marginRight: 10
}

export const HeaderSearch = ({width}) => {
    const stylesSearch  = {
        fontSize: width>580 ? 25 : 47,
    }
    return (
        <s.SearchBar width={width}>
                <s.PhoneNumber >
                    <CallOutlined style={styles}/>
                    <div>
                        PHONE: <br />      
                        +7(909)-666-66-66                        
                    </div>
                </s.PhoneNumber>
                <s.SearchIcon>
                    {width>580 ? null : <SearchOutlined style={stylesSearch}/>}
                </s.SearchIcon>
                <s.Form onClick={(e) => e.preventDefault()}>
                    <s.Input placeholder={'Search'} maxLength='50'/>
                    <s.Button>
                            <SearchOutlined style={stylesSearch}/>              
                    </s.Button>
                </s.Form>
        </s.SearchBar>
    );
}
