import React from 'react'
import "./CardList.scss"
import Card from "../../components/Card/Card"

const CardList = (props) => {

  const {beers} = props

  return (
    <div>
        <section className='card-list'>
        {beers.map((beer) => {
        return (
          <Card key={beer.id} name={beer.name} description={beer.description} image={beer.image_url}/>
        )
      })
      }
        </section>
    </div>
  )
}

export default CardList