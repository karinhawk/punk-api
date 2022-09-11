import React from 'react'
import "./Main.scss"
import CardList from "../CardList/CardList"

const Main = () => {
  return (
    <div className='main'>
      <section className='main__content'>
      <CardList />
      </section>
    </div>
  )
}

export default Main