import React from 'react';
import '../CSS/Footer.css';
import logo from '../Assets/Images/logo.png'
import location from '../Assets/Images/location.svg';
import phone_icon from '../Assets/Images/phone_icon.svg';
import message from '../Assets/Images/message.svg';
import whatsapp from '../Assets/Images/whatsapp.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer1'>
                <div className='footer-logo'>
                    <img className='akku' src={logo} height={'30px'} width={'350px'}></img>
                    <div className='footer-content'>
                        <div className='content'>
                            Order Eyeglass and Sunglass Round –Square-Geomantic
                            shape eyeglass online from a vast range of products,
                            styles, and patterns and buy a pair of branded shades
                            online from the portal. Open your eyeglass style and
                            adopt the new way designer eyeglasses shop Online / Offline
                            with Akku ka chasma and Buy Blue cut lens free with Eyeglass.
                        </div>
                    </div>
                </div>

                <div className='myaccount'>
                    <div className='sub-footer-contact'><strong>MY ACCOUNT</strong></div>
                    <div className='account-title'>
                        <div className='fontchanges'>About Us</div>
                        <div className='fontchanges'>Contact Us</div>
                        <div className='fontchanges'>Refund Policy</div>
                        <div className='fontchanges'>Help</div>
                        <div className='fontchanges'>Cancellation</div>
                        <div className='fontchanges'>Terms & Condition</div>
                        <div className='fontchanges'>Returns & Exchanges</div>
                        <div className='fontchanges'>Shipping & Delivery</div>
                    </div>
                </div>
                <div>
                    <div className='sub-footer-contact'><strong>CONTACT US</strong></div>
                    <div className='footer-contact'>
                        <div className='location'>
                            <div className='loc'>
                                <img src={location} height={'25px'} width={'25px'}></img>
                                <div>&nbsp;1/A,Sector 13, Noida, India-201301</div>
                            </div>
                        </div>
                        <div className='location'>
                            <div className='callus'>
                                <img src={phone_icon} height={'30px'} width={'30px'}></img>
                                <div>Call Us: +91 8188881661</div>
                            </div>
                        </div>
                        <div className='location'>
                            <div className='mailus'>
                                <img src={message} height={'20px'} width={'20px'}></img>
                                <div>&nbsp;&nbsp;Email Us: Help@Akkukachasma.Com</div>
                            </div>
                        </div>
                        <div className='location'>
                            <div className='whats'>
                                <img src={whatsapp} height={'20px'} width={'20px'}></img>
                                <div>&nbsp;&nbsp;Whatsapp Us: +91 8188881661</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sub-footer'>
                <div>&copy;COPYRIGHT ALL RIGHTS RESERVED 2018-2022.
                    DESIGNED & DEVELOPED BY <a className='softication' href='https://www.softication.com/' target={'_blank'}> SOFTICATION TECHNOLOGY </a>
                </div>
                <div>
                    <i class="fa fa-instagram" id="insta" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer