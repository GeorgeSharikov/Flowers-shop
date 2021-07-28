import React from 'react';
import * as s from '../ShopStyles'

export const Rating = ({rating}) => {
    return (
        <s.Start>
            <span>{rating}</span>
            <input type="radio" id="star-1" name="rating" value="1"/>
            <label htmlFor="star-1" title="Оценка «1»"/>
        </s.Start>
    );  
}
