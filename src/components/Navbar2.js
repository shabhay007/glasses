import React from 'react';
import tryon from '../Assets/Images/tryon.webp'
import blulogo from '../Assets/Images/blulogo.webp'
import goldlogo from '../Assets/Images/goldlogo.webp'
import '../CSS/Navbar2.css'

const Navbar2 = () => {
    return (
        <div className='navbar2'>
            <div className="sub-navbar">
                <div>EYEGLASSES</div>
                <div>COMPUTER GLASSES</div>
                <div>KIDS GLASSES</div>
                <div>CONTACT LENSES</div>
                <div>SUN GLASSES</div>
                <div>HOME EYE-TEST</div>
                <div>STORE LOCATOR</div>
            </div>
            <div className='buttons'>
                <div className="smallbtn">
                    <a href="https://www.lenskart.com/compare-looks">
                        <div className="imgwraper">
                            <img src={tryon} alt="3d Try On" height={'38px'} width={'70px'}/>
                        </div>
                    </a>
                </div>
                <div className="smallbtn">
                    <a href="https://www.lenskart.com/compare-looks">
                        <div className="imgwraper">
                            <img src={blulogo} alt="BLU" height={'38px'} width={'70px'}/>
                        </div>
                    </a>
                </div>
                <div className="smallbtn">
                    <a href="https://www.lenskart.com/compare-looks">
                        <div className="imgwraper">
                            <img src={goldlogo} alt="GOLD" height={'38px'} width={'70px'}/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}



export default Navbar2