import React from 'react';
import * as s from '../../ShopStyles.js'

export const ModalSlider = ({product}) => {
    const settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
    }
    return (
        <div>
            <s.StyledSlider {...settings}>
                <div>
                    <img src={product.largePhoto} alt={'flower'} widtrh={'480'} height={'640'}/>
                    <s.HeightModal>{product.params?.height}</s.HeightModal>
                    <s.DiameterModal>Ø {product.params?.diameter}</s.DiameterModal>
                </div>
                {product.photos?.map((i, index) => {
                    return <img key={index} src={i} alt={'flower'}/>
                })}
            </s.StyledSlider>
        </div>
    );
}
