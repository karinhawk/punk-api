import React from 'react'
import "./CardList.scss"
import Card from "../../components/Card/Card"
import beerData from "../../data/beerData.js"

const CardList = (props) => {

    const mappedCards = beerData.map((beer) => {
        return (
          <Card key={beer.id} name={beer.name} description={beer.description} image={beer.image_url}/>
        )
      })

  return (
    <div>
        <section className='card-list'>
        {mappedCards}
        </section>
    </div>
  )
}

export default CardList