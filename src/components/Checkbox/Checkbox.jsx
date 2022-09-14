import React from 'react'
import "./Checkbox.scss"

const Checkbox = (props) => {
    const { label, handleFilter, id, handleCheck } = props;

  return (
    <div>
      <label className='input__label' htmlFor="checkbox">
      <input
      className='input'
        type="checkbox"
        id={id}
        onChange={handleFilter}
        onClick={handleCheck}
      />{label}
      </label>
    </div>
  )
}

export default Checkbox