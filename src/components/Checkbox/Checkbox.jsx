import React from 'react'
import "./Checkbox.scss"

const Checkbox = (props) => {
    const { label, handleFilter, id, handleCheck } = props;

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        onChange={handleFilter}
        onClick={handleCheck}
      />
      <label htmlFor="checkbox">{label}</label>
    </div>
  )
}

export default Checkbox