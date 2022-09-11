import React from 'react'
import Card from "../../components/Card/Card"
import beerData from "../../data/beerData.js"

const CardList = (props) => {

    const mappedCards = beerData.map((beer) => {
        return (
          <Card key={beer.id} name={beer.name} role={beer.description} image={beer.image_url}/>
        )
      })

  return (
    <div>
        {mappedCards}
    </div>
  )
}

export default CardList