import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/logo"
import "./Header.scss"

const Header = () => {
  return (
    <div>
        <section className='heading'>
        <Link to="/">
        <img className='heading__logo' src={logo} alt="brewdog logo" />
        </Link>
        <h1 className='heading__text'>BREWDOG</h1>
      </section>
    </div>
  )
}

export default Header