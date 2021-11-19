import React from 'react';
import * as s from '../../AboutStyle.js'

export const PopularProduct = ({info}) => {
    const {img} = info

    const setScroll = () => {
        window.scrollTo({top: 0})
    }
    return (
            <s.ProductCart>
                <s.Product>
                  <img src={img} alt={'popular flower'} className={'img'}/>
                </s.Product>
                <button className={'btn'} onClick={setScroll}>
                    <s.ProductLink to={'/Shop'}>Go to shop</s.ProductLink>
                </button>
            </s.ProductCart>
    );
}
