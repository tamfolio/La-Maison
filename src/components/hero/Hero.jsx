import React from 'react'
import NavBar from '../navbar/NavBar'
import './hero.scss'
import CountUp from 'react-countup';

function Hero() {
  return (
    <div className='hero'>
        <NavBar/>
        <div className="hero-container">
          <div className="hero-left">
            <h1>Find A House That Suits You</h1>
            <p>Want to find a home? We are ready to help you find one that suits your lifestyle and needs</p>
            <button className="btn2">Get Started</button>
            <div className="numbers-container">
            <div className="numbers-card">
              <h3>
                <span className="count-number">
                  <CountUp end={1200} />
                </span>
                +
              </h3>
              <p>Listed Properties</p>
            </div>
            <div className="numbers-card">
              <h3>
                <span className="count-number">
                  <CountUp end={4500} />
                </span>
                +
              </h3>
              <p>Happy Customers</p>
            </div>
            <div className="numbers-card">
              <h3>
                <span className="count-number">
                  <CountUp end={100} />
                </span>
                +
              </h3>
              <p>Awards</p>
            </div>
          </div>
          </div>
          <div className="hero-right">
            <img src="/assets/Hero.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Hero