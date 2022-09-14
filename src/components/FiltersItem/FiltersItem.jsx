import React from 'react'
import "./FiltersItem.scss"
import Checkbox from '../Checkbox/Checkbox'

const FiltersItem = (props) => {

  const {handleFilter, handleCheck} = props


  return (
    <div className='filter'>
      <Checkbox label={"ABV > 6%"} id={"abv"} handleFilter={handleFilter} handleCheck={handleCheck} />
      <Checkbox label={"Classics"} id={"classics"} handleFilter={handleFilter} handleCheck={handleCheck} />
      <Checkbox label={"High Acidity"} id={"acidic"} handleFilter={handleFilter} handleCheck={handleCheck} />
    </div>
  )
}

export default FiltersItem