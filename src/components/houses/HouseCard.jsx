import { Hotel, LocationOn } from '@material-ui/icons'
import React from 'react'
import './housecard.scss'

function HouseCard() {
  return (
    <div className='cards'>
        <div className="card">
            <img src="/assets/house (3).png" alt="" />
            <div className="location">
                <LocationOn/>
                <span className="location">Banana Island, Lagos</span>
            </div>
            <div className="details">
                <div className="bed">
                    <Hotel/>
                    <span className='house-detail'>4 Bed</span>
                </div>
                <div className="bed">
                    <Hotel/>
                    <span className='house-detail'>10 x 10m</span>
                </div>
                <div className="bed">
                    <Hotel/>
                    <span className='house-detail'>1600m</span>
                </div>
            </div>
            <div className="book-now">
                <button className='book-now'>Book Now</button>
                <div className="price">$200,000,000</div>
            </div>
        </div>
    </div>
  )
}

export default HouseCard