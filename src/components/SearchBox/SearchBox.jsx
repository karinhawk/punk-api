import React from 'react'
import "./SearchBox.scss"

const SearchBox = (props) => {

  const {handleInput, searchTerm, beers} = props;

  return (
    <div className='search'>
      <label className='search__label' />Search a specific beer
        <input className="search__input" type="text" value={searchTerm} onInput={handleInput} />
    </div>
  )
}

export default SearchBox