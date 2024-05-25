import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Links from '../../assets/img/links.png'

function Home() {
  return (
    <div className='home'>
      <Hero/>
        <div className="container">
        
        <div className="home__top">
          <h4>PARTNERS</h4>
          <h2>Lorem, Ipsum Dolor.</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. adipisicing elit</p>
        </div>
        </div>
        <div className="links">
          <img src={Links} alt="" />
          <button className='link__btn'>Learn More</button>
        </div>

    </div>
  )
}

export default Home