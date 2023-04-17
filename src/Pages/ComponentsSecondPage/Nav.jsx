import React from 'react';
import logo from '../../Assets/Images/logo.png'
import '../CSSsecondPage/Navbar.css'
import Profile from '@mui/icons-material/Person2Outlined';
import Wishilist from '@mui/icons-material/FavoriteBorder';
import Search from '@mui/icons-material/SearchOutlined';
import Cart from '@mui/icons-material/ShoppingBagOutlined';

const Navbar = () => {
  return (
    <>
      <div className='john'>
        <div className="logoakk">
          <div><img src={logo} height={'40px'} width={'90%'} /></div>
        </div>
        <div className="names">
          <div><a className='link' href="">RHAPSODY</a></div>
          <div><a className='link' href="">EYEGLASSES</a></div>
          <div><a className='link' href="">SUNGLASSES</a></div>
          <div><a className='link' href="">STYLE QUIZ</a></div>
          <div><a className='link' href="">ACCESSORIES</a></div>
          <div><a className='link' href="">STORE LOCATOR</a></div>
        </div>
        <div className="icons">
          <div className="profile">
            <div><Profile /></div>
          </div>
          <div className="wishlist">
            <div><Wishilist /></div>
          </div>
          <div className="sea">
            <div><Search /></div>
          </div>
          <div className="cart">
            <div><Cart /></div>
          </div>
        </div>
      </div>
      <div className="search_popup"></div>
      <div className="seccont">
        <div className='e'>Eyeglasses</div>
        <div className='p'>Popular Categories</div>
      </div>
    </>
  )
}

export default Navbar