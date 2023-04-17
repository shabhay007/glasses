import React from 'react';
import Card_Carousel2 from './Card_Carousel2';
import '../CSS/Carousel2.css';

const Carousel2 = () => {

    const btnpressprev = () => {
        let box = document.querySelector('.product-cont');
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }

    const btnpressnext = () => {
        let box = document.querySelector('.product-cont');
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }

    return (
        <div className='component5'>
            <div className='carousel_name'>
                <div className="eye">EYEGLASSES</div>
                <div className="trend">TREND</div>
            </div>
            <div className='carousel2'>
                <button className="previousbtn" onClick={btnpressprev}><p>&lt;</p></button>
                <button className="nextbtn" onClick={btnpressnext}><p>&gt;</p></button>

                <div className="product-cont">
                    <Card_Carousel2 cdno='1'/>
                    <Card_Carousel2 cdno='2'/>
                    <Card_Carousel2 cdno='3'/>
                    <Card_Carousel2 cdno='4'/>
                    <Card_Carousel2 cdno='5'/>
                    <Card_Carousel2 cdno='6'/>
                    <Card_Carousel2 cdno='7'/>
                    <Card_Carousel2 cdno='8'/>
                    <Card_Carousel2 cdno='9'/>
                </div>
            </div>
        </div>
    )
}

export default Carousel2