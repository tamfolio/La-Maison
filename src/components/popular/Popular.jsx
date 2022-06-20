import { ArrowRightAlt } from '@material-ui/icons'
import React from 'react'
import HouseCard from '../houses/HouseCard'
import './popular.scss'

function Popular() {
  return (
    <div className='popular'>
        <div className="popularContent">
        <div className="popularTitle">
            <h3>Popular</h3>
        </div>
        <div className="popularSecTitle">
            <h1>Our Popular Homes</h1>
            <div className="explore">
                <h4>Explore All</h4>
                <ArrowRightAlt />
            </div>
        </div>
        <HouseCard/>
        </div>
    </div>
  )
}

export default Popular