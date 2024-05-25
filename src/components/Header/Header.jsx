import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.svg'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className="container">
            <div className="nav">
                <Link to={'/'}>
                <img src={Logo} alt="" />
                </Link>
                <ul className='nav__list'>
                    <li className="nav__item">
                        <Link to={'/'}>
                        Home
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to={'/portfolio'}>
                        Portfolio
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to={'/services'}>
                        Services
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to={'contact'}>
                        Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;