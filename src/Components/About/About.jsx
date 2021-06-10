import Slider from 'react-slick'
import styled from 'styled-components'
import arrow from './../../Assets/arrow.png'

const StyledSlider = styled(Slider)`
    .slick-slider{
        position: relative;  
    }
    .slick-list{
        height: 300px;
        overflow: hidden;
        /* background-color: red; */
    }
    .slick-track{
        display: flex;
    }
    .slick-arrow{
        position: absolute;
        top: 50%;
        z-index: 10;
        font-size: 0;

    }
    .slick-arrow.slick-prev{
        left: 0;
        background: url("./../../Assets/arrow.png");
        background-size: 50px 50px;
    }
    .slick-arrow.slick-next{
        right: 0;
        background: no-repeat url("https://prooriginal.ru/image/catalog/demo/brendy/photo.jpg");
        background-size: 50px 50px;
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
    <button style={{background: "url('https://prooriginal.ru/image/catalog/demo/brendy/photo.jpg')",fontSize: '0', width: '50px', height: '50px'}}>as</button>
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