import React from 'react'
import "./Main.scss"
import CardList from "../CardList/CardList"

const Main = (props) => {

const {beersArr} = props;

  return (
    <div className='main'>
      <section className='main__content'>
      <CardList beersArr={beersArr}/>
      </section>
    </div>
  )
}

export default Main