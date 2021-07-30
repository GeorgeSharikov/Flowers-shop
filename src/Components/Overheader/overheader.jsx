import React from 'react';
import * as s from './overheaderStyles'
import {FavoritesBar} from "./FavoritesBar/favoritesBar";

export const OverHeader = (props) => {
    return (
        <s.OverHeaderStyled>
            <s.OverHeaderContainer>
                <FavoritesBar />
            </s.OverHeaderContainer>
        </s.OverHeaderStyled>
    );
}
