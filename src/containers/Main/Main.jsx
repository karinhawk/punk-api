import React from 'react'
import "./Main.scss"
import CardList from "../CardList/CardList"
import Navbar from '../Navbar/Navbar';

const Main = (props) => {

const {beersArr, beers, handleFilter, handleInput, searchTerm} = props;

  return (
    <div className='main'>
      <section className='nav'>
        <Navbar beers={beers} handleFilter={handleFilter} handleInput={handleInput} searchTerm={searchTerm}/>
      </section>
      <section className='main__content'>
      <CardList beersArr={beersArr}/>
      </section>
    </div>
  )
}

export default Main