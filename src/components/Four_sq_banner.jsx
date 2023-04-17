import React from 'react';
import four_sq1 from '../Assets/Banners/four_sq1.webp';
import four_sq2 from '../Assets/Banners/four_sq2.webp';
import four_sq3 from '../Assets/Banners/four_sq3.webp';
import four_sq4 from '../Assets/Banners/four_sq4.webp';
import '../CSS/Four_sq_banner.css'

const Four_sq_banner = () => {
    return (
        <div className='foursqbanner'>
            <div className="twobanner">
                <div className='four-img'><img className='aaaa' src={four_sq1} /></div>
                <div className="nextimg"><img className='cccc' src={four_sq3} height={'270px'}/></div>
            </div>
            <div className="nexttwobanner">
                <div className='four-img'><img className='bbbb' src={four_sq2} /></div>
                <div className="nextimg"><img className='dddd' src={four_sq4} height={'270px'}/></div>
            </div>
        </div>
    )
}

export default Four_sq_banner