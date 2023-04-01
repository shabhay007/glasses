import React from 'react'
import '../CSS/Searchbar.css'
import logo from '../Assets/Images/logo.png'
import phone from '../Assets/Images/phone.svg'


const Searchbar = () => {
  return (
    <div className='Searchbar'>
      <div className='phone'>
        <img className='phnimg' src={phone} height={'15px'} width={'15px'}></img> 1800-111-111
      </div>
      <div className='logo'>
        <img src={logo} height={'50px'} width={'550px'}></img>
      </div>
      <div className='search'>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>

      </div>
    </div>
  )
}

export default Searchbar