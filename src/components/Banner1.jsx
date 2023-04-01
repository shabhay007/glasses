import React from 'react';
import banner1 from '../Assets/Banners/banner1.png'
import '../CSS/Banner_CSS/Banner1.css'

const Banner1 = () => {
  return (
    <div className='banner1'>
        <img src={banner1} height={'300px'} width={'100%'}/>
    </div>
  )
}

export default Banner1