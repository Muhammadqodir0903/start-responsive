import React from 'react'
import heroImg from '../../assets/img/Hero.img.png'
import './Hero.css'

function Hero() {
  return (
<div className='hero'>
        <div className="container">
   <div className="hero__wrap">
   <div className="hero__info">
    <h5>WELCOME</h5>
<h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At laudantium et, id assumenda delectus voluptas ad dolor iusto quaerat ullam dolore rerum provident est. Dolorem, dolores saepe.</p>
<button>Explore</button>
</div>
<div className="hero__img">
  <img src={heroImg}alt="" />
</div>
   </div>
        </div>
    </div>
  )
}

export default Hero