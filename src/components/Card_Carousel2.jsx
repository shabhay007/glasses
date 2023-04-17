import React from 'react'
import '../CSS/Card_Carousel2.css'
import card2 from '../Assets/Images/card2.png'

const Card_Carousel2 = (props) => {
    return (
        <div className="card_carousel2">
            <div className='mcard'>
                <div className="pic">
                    <img className='mainCarouselImage' src={card2} />
                </div>
            </div>
            <div className="item-names">Names + {props.cdno}</div>
            <div className="addin-cart">
                <button className="addin-btn">Explore</button>
            </div>
        </div>
    )
}

export default Card_Carousel2