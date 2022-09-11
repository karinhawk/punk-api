import React from 'react'

const FiltersItem = () => {
  return (
    <div className="filter">
        <input className="radio-button" type="radio" value="highABV" />
        <input className="radio-button" type="radio" value="classics" />
        <input className="radio-button" type="radio" value="acidic" />
    </div>
  )
}

export default FiltersItem