import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import arrowr from '../../../Assets/sl-arrow_r.svg'
import arrowl from '../../../Assets/sl-arrow_l.svg'
import slide1 from '../../../Assets/slide-1.png'
import slide2 from '../../../Assets/slide-2.png'
import { NavLink } from 'react-router-dom'

const StyledSlider = styled(Slider)`
    position: relative;
    .slick-list{ 
        overflow: hidden;
    }
    .slick-track{
        display: flex;
    }
    .slick-arrow{
        position: absolute;
        top: 50%;
        z-index: 8;
        font-size: 0;
        width: 30px;
        height: 30px;
        border: none;
        cursor: pointer;
    }
    .slick-arrow.slick-prev{
        left: 0;
        background: no-repeat url(${arrowl});
        background-size: 30px 30px;
        margin: 0 0 0 20px;
    }   
    .slick-arrow.slick-next{
        right: 0;
        background: no-repeat url(${arrowr});
        background-size: 30px 30px;
        margin: 0 20px 0 0;
    }
    .slick-slide{
        
    }
`

const SliderText = styled.div`
    position: absolute;
    top: 30%;
    left: 0;
    width: 575px;
    height:282px;
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    h1{
        font-size: 72px;
        line-height: 1;
        color: #434343;
        font-weight: 700;
    }
    h6{
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 25px;
        font-weight: 400;
        color:#666;
    }
    p{
        padding-bottom: 25px;
        color:#666;
        font-size: 18px;
    }
`

const SliderButton = styled.div`
    text-align: center;
    max-width: 120px;
    padding: 12px 0px;
    cursor: pointer;
    border-radius: 50px;
    font-weight: 600;
    background-color: #e55472;
    color: #fff;
    transition: .3s;
    &:hover{
        background-color: #565656;
        color: #fff;
    }
`
const SliderLink = styled(NavLink)`
    text-decoration: none;
    color: white;
`
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
        <StyledSlider {...settings}>
           <div>
                <img src={slide1} width="100%" height="629px" alt='slide'/>
                <SliderText>
                    <h1>Fresh flowers</h1>
                    <h6>Delivery of bouquets of flowers</h6>
                    <p>Make an order for Valentine's Day from March 7 to April 23 and get a 10% discount on the entire order!</p>
                    <SliderButton>
                        <SliderLink to='/Shop'>
                            Go To Shop
                        </SliderLink>
                    </SliderButton>
                </SliderText>
           </div>
           <div>
               <img src={slide2} width="100%" height="629px" alt='slide'/>                
               <SliderText>
                    <h1>Fresh flowers</h1>
                    <h6>Delivery of bouquets of flowers</h6>
                    <p>Make an order for Valentine's Day from March 7 to April 23 and get a 10% discount on the entire order!</p>
                    <SliderButton>
                        <SliderLink to='/Shop'>
                            Go To Shop
                        </SliderLink>
                    </SliderButton>
                </SliderText>

           </div>
        </StyledSlider>
     </div>
}