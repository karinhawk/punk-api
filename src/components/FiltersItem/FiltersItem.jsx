import React from 'react'
import { useState } from 'react'
import "./FiltersItem.scss"

const FiltersItem = (props) => {

  const {beers, handleFilter} = props


  return (
    <div className="filter">
        <label className='filter__label' htmlFor="">ABV less than 6%
            <input id='abv' className="filter__button" type="radio" value="highABV" onChange={handleFilter}/></label>
            <label className='filter__label' htmlFor="">Classics
            <input id='classics' className="filter__button" type="radio" value="classics" onChange={handleFilter}/>
            </label>
        <label className='filter__label' htmlFor="">Acidity
        <input id='acidity' className="filter__button" type="radio" value="acidic" onChange={handleFilter}/>
        </label>
    </div>
  )
}

export default FiltersItem