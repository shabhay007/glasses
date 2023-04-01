import React from 'react'
import '../CSS/Navbar.css'
import wishlist from '../Assets/Images/wishlist.svg'
import cart from '../Assets/Images/cart.svg'

const Navbar = () => {
  return (
    <div>
        <div className="top_header">
            <div className="header1">
                <div>Do More, Be More</div>
                <div>Try in 3D</div>
                <div>Store Locator</div>
                <div>Quality</div>
                <div>USA</div>
                <div>Singapore</div>
                <div>UAE</div>
                <div>John Jacobs</div>
                <div>Aqualens</div>
                <div>Cobrowsing</div>
                <div>Engineering Blog</div>
                <div>Lenskart Franchise</div>
                <div>Lenskart Optom Partner Program</div>
            </div>
            <div className="header2">
                <div>Track Order</div>
                <div>Sign In & Sign Up</div>
                <div><img src={wishlist} height={'12px'} width={'15px'}></img> Wishlist</div>
                <div><img src={cart} height={'15px'} width={'15px'}></img> Cart</div>
                <div>Contact Us</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
