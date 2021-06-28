import Slider from 'react-slick'
import styled from 'styled-components'
import arrowr from '../../Assets/arrow.png'
import arrowl from '../../Assets/arrow_l.png'

const StyledSlider = styled(Slider)`
    .slick-slider{
        position: relative;  
    }
    .slick-list{
        height: 70%;
        overflow: hidden;
        background-color: red;
    }
    .slick-track{
        display: flex;
    }
    .slick-arrow{
        position: absolute;
        top: 50%;
        z-index: 10;
        font-size: 0;
        width: 50px;
        height: 50px;
        border: none;
        margin: 50px;
    }
    .slick-arrow.slick-prev{
        left: 0;
        background: no-repeat url(${arrowl} );
        background-size: 30px 30px;
    }
    .slick-arrow.slick-next{
        right: 0;
        background: no-repeat url(${arrowr});
        background-size: 30px 30px;
        
    }
    .slick-slide{
        
    }
`

export const About = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    }
     return <div>
     <StyledSlider {...settings}>
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
            </div>
            <div>
                4
            </div>
         </StyledSlider>
         </div>
}