import React from 'react'
import './search.scss'

function Search() {
  return (
    <div className='search'>
        <div className="search-box">
            <h3>Search for available properties</h3>
            <div className="input-fields">
                <input type="text" placeholder='Location' />
                <input type="text" placeholder='Property type' />
                <input type="text" placeholder='Budget' />
                <button className="btn">Search Now</button>
            </div>
        </div>
    </div>
  )
}

export default Search