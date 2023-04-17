// import React from 'react';
// import Slider from 'react-slick';
// import eyeglasses from '../../Assets/Images/eyeglasses.png';
import '../../CSS/Eyeglass_CSS/Eyeglassrow1.css'

// const Eyeglassesrow1 = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         cssEase: "linear"
//     };
//     return (
//         <>
//             <div className="hr">
//                 <hr />
//             </div>
//             <div className="showname">
//                 <div className="bestseller">BEST SELLERS</div>&nbsp;&nbsp;&nbsp;
//                 <div className="roundeyeglass"><strong>Round Eyeglass</strong></div>
//             </div>
//             <div className='eyeglass_crousel' >
//                 <Slider {...settings}>
//                     <div className='eyecrousel' >
//                         <div className='buytoguide'>
//                             <img src={eyeglasses} height={'80px'} width={'80px'}></img>
//                         </div>
//                         <div className='buytoguide2'>BUY TO GUIDE</div>
//                     </div>
//                     <div className='eyecrousel' >
//                         <div className='buytoguide'>
//                             <img src={eyeglasses} height={'80px'} width={'80px'}></img>
//                         </div>
//                         <div className="buytoguide2">BUY TO GUIDE</div>
//                     </div>
//                     <div className='eyecrousel' >
//                         <div className='buytoguide'>
//                             <img src={eyeglasses} height={'80px'} width={'80px'}></img>
//                         </div>
//                         <div className="buytoguide2">BUY TO GUIDE</div>
//                     </div>
//                     <div className='eyecrousel' >
//                         <div className='buytoguide'>
//                             <img src={eyeglasses} height={'80px'} width={'80px'}></img>
//                         </div>
//                         <div className="buytoguide2">BUY TO GUIDE</div>
//                     </div>
//                     <div className='eyecrousel' >
//                         <div className='buytoguide'>
//                             <img src={eyeglasses} height={'80px'} width={'80px'}></img>
//                         </div>
//                         <div className="buytoguide2">BUY TO GUIDE</div>
//                     </div>
//                 </Slider>
//             </div>
//         </>
//     )
// }

// export default Eyeglassesrow1

import React from 'react'
import Card from '../../components/Card'

const Imagecaraousel = () => {
    
    const btnpressprev = () => {
        let box = document.querySelector('.product-container');
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }

    const btnpressnext = () => {
        let box = document.querySelector('.product-container');
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }
     
  return (
    <div className='product-carousel'>
        <hr />
        <div className="eyeglass">
            <div className="bestseller">BEST SELLERS &nbsp;&nbsp;&nbsp;</div>
            <div className="glasses">Eyeglasses</div>
        </div>
        <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
        <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>

        <div className="product-container">
            <Card cardno='1' />
            <Card cardno='2' />
            <Card cardno='3' />
            <Card cardno='4' />
            <Card cardno='5' />
            <Card cardno='6' />
            <Card cardno='7' />
            <Card cardno='8' />
            <Card cardno='9' />
        </div>

        <div className="explorebtn">
            <button className="expbtn">VIEW RANGE</button>
        </div>
    </div>
  )
}

export default Imagecaraousel