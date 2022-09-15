import React from 'react'
import logo from "../../images/logo"
import "./Header.scss"

const Header = () => {
  return (
    <div>
        <section className='heading'>
        <img className='heading__logo' src={logo} alt="brewdog logo" />
        <h1 className='heading__text'>Brewdog</h1>
      </section>
    </div>
  )
}

export default Header