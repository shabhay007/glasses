import React from 'react';
import Slider from "react-slick";
import '../CSS/Carousel1.css'
import buy_to_guide from '../Assets/Images/buy_to_guide.png';
import eyeglasses from '../Assets/Images/eyeglasses.png';
import readingglass from '../Assets/Images/readingglass.png';
import prescription_glass from '../Assets/Images/prescription_glass.jpeg';
import whatsapp from '../Assets/Images/whatsapp.png';
import sunglasses from '../Assets/Images/sunglasses.png';

const Carousel1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className='parentcrausel'>
            <div className='carousel'>
                <Slider {...settings}>
                    <div className='asdfg' >
                        <div className='carousel1_buytoguide'>
                            <img src={buy_to_guide} height={'80px'} width={'70px'}></img>
                        </div>
                        <div>BUY TO GUIDE</div>
                    </div>
                    <div className='asdfg' >
                        <div className='carousel1_buytoguide'>
                            <img src={sunglasses} height={'80px'} width={'80px'}></img>
                        </div>
                        <div>SUNGLASSES</div>
                    </div>
                    <div className='asdfg' >
                        <div className='carousel1_buytoguide'>
                            <img src={buy_to_guide} height={'80px'} width={'80px'}></img>
                        </div>
                        <div>BUY TO GUIDE</div>
                    </div>
                    <div className='asdfg' >
                        <div className='carousel1_buytoguide'>
                            <img src={readingglass} height={'80px'} width={'80px'}></img>
                        </div>
                        <div>READING GLASSES</div>
                    </div>
                    <div className='asdfg' >
                        <div className='carousel1_buytoguide'>
                            <img src={whatsapp} height={'80px'} width={'80px'}></img>
                        </div>
                        <div>WHATSAPP</div>
                    </div>
                    <div className='asdfg' >
                        <div className='carousel1_buytoguide'>
                            <img className='kdjfskdjk' src={prescription_glass} height={'80px'} width={'80px'}></img>
                        </div>
                        <div>PRESCRIPTION GLASSES</div>
                    </div>
                    <div className='asdfg' >
                        <div className='carousel1_buytoguide'>
                            <img src={eyeglasses} height={'80px'} width={'80px'}></img>
                        </div>
                        <div>EYEGLASSES</div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Carousel1