import React from 'react';
import * as s from '../../ShopStyles'

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
                    <img src={product.largePhoto} alt={'flower'}/>
                    <s.HeightModal>{product.params?.height}</s.HeightModal>
                    <s.DiameterModal>Ø{product.params?.diameter}</s.DiameterModal>
                </div>
                {product.photos?.map((i, index) => {
                    return <img key={index} src={i} alt={'flower'}/>
                })}
            </s.StyledSlider>
        </div>
    );
}
