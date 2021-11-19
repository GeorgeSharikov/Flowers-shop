import React from 'react';
import * as s from './overheaderStyles.js'
import {FavoritesBar} from "./FavoritesBar/favoritesBar.jsx";

export const OverHeader = (props) => {
    return (
        <s.OverHeaderStyled>
            <s.OverHeaderContainer>
                <FavoritesBar />
            </s.OverHeaderContainer>
        </s.OverHeaderStyled>
    );
}
