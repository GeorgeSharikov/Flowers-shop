import React from 'react';
import * as s from '../ShopStyles'

export const Rating = ({rating, ratingCount}) => {
    const length = ratingCount.toString().split('').length
    return (
        <s.Start length={length}>
            <span>{rating}</span>
            <sup>({ratingCount} reviews)</sup>
            <input type="radio" id="star-1" name="rating" value="1"/>
            <label htmlFor="star-1" title="Оценка «1»"/>
        </s.Start>
    );  
}
