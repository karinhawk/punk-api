import React from 'react'
import "./Navbar.scss"
import FiltersList from "../FiltersList/FiltersList"
import SearchBox from "../../components/SearchBox/SearchBox"

const Navbar = () => {
  return (
    <div className='navbar'>
      <section className='navbar__filter'>
        <FiltersList />
      </section>
      <section className='navbar__search'>
        <SearchBox />
      </section>
    </div>
  )
}

export default Navbar