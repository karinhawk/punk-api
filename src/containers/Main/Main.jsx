import React from 'react'
import "./Main.scss"
import CardList from "../CardList/CardList"

const Main = (props) => {

const {fetchBeers, beers} = props;

  return (
    <div className='main'>
      <section className='main__content'>
      <CardList beers={beers}/>
      </section>
    </div>
  )
}

export default Main