import React from 'react'
import "./Navbar.scss"
import FiltersItem from "../../components/FiltersItem/FiltersItem"
import SearchBox from "../../components/SearchBox/SearchBox"

const Navbar = ({beers, handleFilter, handleInput, searchTerm, handleCheck}) => {
  return (
    <div className='navbar'>
      <section className='navbar__filter'>
        <FiltersItem handleFilter={handleFilter} handleCheck={handleCheck}/>
      </section>
      <section className='navbar__search'>
        <SearchBox handleInput={handleInput} searchTerm={searchTerm} beers={beers}/>
      </section>
    </div>
  )
}

export default Navbar