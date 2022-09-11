import React from 'react'
import "./FiltersItem.scss"

const FiltersItem = () => {
  return (
    <div className="filter">
        <label className='filter__label' htmlFor="">ABV
            <input className="filter__button" type="radio" value="highABV" /></label>
            <label className='filter__label' htmlFor="">Classics
            <input className="filter__button" type="radio" value="classics" />
            </label>
        <label className='filter__label' htmlFor="">Acidity
        <input className="filter__button" type="radio" value="acidic" />
        </label>
    </div>
  )
}

export default FiltersItem