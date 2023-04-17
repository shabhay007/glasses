import React from 'react'
import '../CSS/Card.css'
import prescription_glass from '../Assets/Images/prescription_glass.jpeg'

const Card = (props) => {
    return (
        <div className="card">
            <div className='mycard'>
                <div className="picture">
                    <img src={prescription_glass} height={'130px'} width={'230px'} />
                </div>
            </div>
            {/* <div className="names">Names + {props.cardno}</div>
            <div className="addincart">
                <button className="addinbtn">Explore</button>
            </div> */}
        </div>
    )
}

export default Card