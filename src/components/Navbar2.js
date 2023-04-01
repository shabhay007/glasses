import React from 'react';
import '../CSS/Navbar2.css'
import eye from '../Assets/Images/eye.jfif'

const Navbar2 = () => {
    return (
        <div className='navbar2'>
            <div className="sub-navbar">
                <div><strong>EYEGLASSES</strong></div>
                <div>COMPUTER GLASSES</div>
                <div>KIDS GLASSES</div>
                <div>CONTACT LENSES</div>
                <div>SUN GLASSES</div>
                <div>HOME EYE-TEST</div>
                <div>STORE LOCATOR</div>
            </div>
            <div className='buttons'>
                <button className="threeD separate_button" type="submit">
                    3D&nbsp;TRY&nbsp;ON
                </button>
                <button className="blu separate_button" type="submit">
                    BLU
                </button>
                <button className="gold separate_button" type="submit">
                    GOLD
                </button>
            </div>
        </div>
    )
}



export default Navbar2