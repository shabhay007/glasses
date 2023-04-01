import React from 'react';
import '../CSS/Carousel2.css';
import Slider from "react-slick";
import eyeglasses from '../Assets/Images/eyeglasses.png';


const Carousel2 = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className='component5'>
            <div className='carousel_name'>
                <div className="eye">EYEGLASSES</div>
                <div className="trend">TREND</div>
            </div>
            <div className='carousel2'>
                <Slider {...settings}>
                    <div>
                        <div className='buytocrousel'>
                            <img src={eyeglasses} height={'80px'} width={'80px'}></img>
                        </div>
                        <div className='cnames'>BUY TO GUIDE</div>
                    </div>
                    <div>
                        <div className='buytocrousel'>
                            <img src={eyeglasses} height={'80px'} width={'80px'}></img>
                        </div>
                        <div className='cnames'>SUNGLASSES</div>
                    </div>
                    <div>
                        <div className='buytocrousel'>
                            <img src={eyeglasses} height={'80px'} width={'80px'}></img>
                        </div>
                        <div className='cnames'>BUY TO GUIDE</div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Carousel2