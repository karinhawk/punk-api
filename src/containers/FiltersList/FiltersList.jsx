import React from 'react'
import { useState } from 'react'
import "./FiltersList.scss"
import FiltersItem from "../../components/FiltersItem/FiltersItem"

const FiltersList = ({beers, handleFilter}) => {

  return (
    <div>
        <section className='filter-section'>
            <FiltersItem beers={beers} handleFilter={handleFilter}/>
        </section>
    </div>
  )
}

export default FiltersList