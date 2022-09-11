import React from 'react'
import "./FiltersList.scss"
import FiltersItem from "../../components/FiltersItem/FiltersItem"

const FiltersList = () => {

    //logic

  return (
    <div>
        <section className='filter-section'>
            <FiltersItem />
        </section>
    </div>
  )
}

export default FiltersList