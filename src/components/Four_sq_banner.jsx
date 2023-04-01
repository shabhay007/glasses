import React from 'react';
import four_sq1 from '../Assets/Banners/four_sq1.webp';
import four_sq2 from '../Assets/Banners/four_sq2.webp';
import four_sq3 from '../Assets/Banners/four_sq3.webp';
import four_sq4 from '../Assets/Banners/four_sq4.webp';
import '../CSS/Four_sq_banner.css'

const Four_sq_banner = () => {
    return (
        <div className='foursqbanner'>
            <div className="uppertwo">
                <img className='imgban' src={four_sq2} height={'130%'} width={'48%'} />
                <img className='imgban' src={four_sq1} height={'130%'} width={'48%'} />
            </div>
            <div className="lowertwo">
                <img className='imgban' src={four_sq4} height={'130%'} width={'48%'} />
                <img className='imgban' src={four_sq3} height={'130%'} width={'48%'} />
            </div>
        </div>
    )
}

export default Four_sq_banner