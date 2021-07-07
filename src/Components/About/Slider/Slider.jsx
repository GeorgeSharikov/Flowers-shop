import React from 'react'
import slide1 from '../../../Assets/slide-1.png'
import slide2 from '../../../Assets/slide-2.png'
import * as s from '../AboutStyle'

export const MainSlider = () => {
    const settings = {
        infinite: true,
        speed: 1500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000
    }
    return<div>
        <s.StyledSlider {...settings}>
           <div>
                <img src={slide1} width="100%" height="629px" alt='slide'/>
                <s.SliderText>
                    <h1>Fresh flowers</h1>
                    <h6>Delivery of bouquets of flowers</h6>
                    <p>Make an order for Valentine's Day from March 7 to April 23 and get a 10% discount on the entire order!</p>
                    <s.SliderButton>
                        <s.SliderLink to='/Shop'>
                            Go To Shop
                        </s.SliderLink>
                    </s.SliderButton>
                </s.SliderText>
           </div>
           <div>
               <img src={slide2} width="100%" height="629px" alt='slide'/>                
               <s.SliderText>
                    <h1>Fresh flowers</h1>
                    <h6>Delivery of bouquets of flowers</h6>
                    <p>Make an order for Valentine's Day from March 7 to April 23 and get a 10% discount on the entire order!</p>
                    <s.SliderButton>
                        <s.SliderLink to='/Shop'>
                            Go To Shop
                        </s.SliderLink>
                    </s.SliderButton>
                </s.SliderText>
           </div>
        </s.StyledSlider>
     </div>
}