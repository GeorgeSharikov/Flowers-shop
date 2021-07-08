import React from 'react';
import styled from 'styled-components'

const Page = styled.div`
  p{
    font-size: 18px;
    color: black;
  }
   @media(max-width: 420px){
        margin-bottom: 8px;
   }
`

export const PageShow = (props) => {
    return (
        <Page>
            <p>
                Page 1 of 2
            </p>
        </Page>
    );
}
