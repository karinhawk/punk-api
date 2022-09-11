import React from 'react'
import FiltersList from "../FiltersList/FiltersList"
import SearchBox from "../../components/SearchBox/SearchBox"

const Navbar = () => {
  return (
    <div>
        <FiltersList />
        <SearchBox />
    </div>
  )
}

export default Navbar