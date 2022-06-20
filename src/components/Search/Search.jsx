import React from 'react'
import './search.scss'
import { LocationOn, House, MonetizationOn } from '@material-ui/icons'

function Search() {
  return (
    <div className='search'>
        <div className="search-box">
            <h3>Search for available properties</h3>
            <div className="input-fields">
                <input type="text" placeholder='Location' />
                <LocationOn className='field-icon'/>
                <input type="text" placeholder='Property type' />
                <House className='field-icon'/>
                <input type="text" placeholder='Budget' />
                <MonetizationOn className='field-icon'/>
                <button className="btn">Search Now</button>
            </div>
        </div>
    </div>
  )
}

export default Search