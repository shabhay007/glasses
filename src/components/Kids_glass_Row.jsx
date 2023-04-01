import React from 'react';
import Slider from 'react-slick';
import eyeglasses from '../Assets/Images/readingglass.png';
import '../CSS/Kids_glass_row.css'

const Kids_glass_Row = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <>
            <div className="hr">
                <hr />
            </div>
            <div className="showname">
                <div className="bestseller">BEST SELLERS</div>&nbsp;&nbsp;&nbsp;
                <div className="roundeyeglass"><strong>Kids Glasses</strong></div>
            </div>
            <div className='eyeglass_crousel' >
                <Slider {...settings}>
                    <div className='eyecrousel' >
                        <div className='buytoguide'>
                            <img src={eyeglasses} height={'80px'} width={'80px'}></img>
                        </div>
                        <div className='buytoguide2'>BUY TO GUIDE</div>
                    </div>
                    <div className='eyecrousel' >
                        <div className='buytoguide'>
                            <img src={eyeglasses} height={'80px'} width={'80px'}></img>
                        </div>
                        <div className="buytoguide2">BUY TO GUIDE</div>
                    </div>
                    <div className='eyecrousel' >
                        <div className='buytoguide'>
                            <img src={eyeglasses} height={'80px'} width={'80px'}></img>
                        </div>
                        <div className="buytoguide2">BUY TO GUIDE</div>
                    </div>
                    <div className='eyecrousel' >
                        <div className='buytoguide'>
                            <img src={eyeglasses} height={'80px'} width={'80px'}></img>
                        </div>
                        <div className="buytoguide2">BUY TO GUIDE</div>
                    </div>
                    <div className='eyecrousel' >
                        <div className='buytoguide'>
                            <img src={eyeglasses} height={'80px'} width={'80px'}></img>
                        </div>
                        <div className="buytoguide2">BUY TO GUIDE</div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Kids_glass_Row