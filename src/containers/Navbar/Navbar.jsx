import React from 'react'
import "./Navbar.scss"
import FiltersList from "../FiltersList/FiltersList"
import SearchBox from "../../components/SearchBox/SearchBox"

const Navbar = ({beers, handleFilter, handleInput, searchTerm}) => {
  return (
    <div className='navbar'>
      <section className='navbar__filter'>
        <FiltersList beers={beers} handleFilter={handleFilter}/>
      </section>
      <section className='navbar__search'>
        <SearchBox handleInput={handleInput} searchTerm={searchTerm} beers={beers}/>
      </section>
    </div>
  )
}

export default Navbar