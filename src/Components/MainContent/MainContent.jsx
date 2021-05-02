import React from 'react';
import styled from 'styled-components'

export const MainContent = styled.div`
  grid-area: content;
  background-color: green;
`

export const Content = (props) => {
    return (
        <MainContent>
            a
        </MainContent>
    );
}
