import React from 'react'
import "./CardList.scss"
import Card from "../../components/Card/Card"
import { Link } from 'react-router-dom'

const CardList = ({beersArr}) => {

  return (
    <div>
        <section className='card-list'>
        {beersArr.map((beer) => {
        return (
          <div>
          <Card key={beer.id} name={beer.name} image={beer.image_url} alcoholContent={beer.abv} tagline={beer.tagline} beerId={beer.id}/>
          </div>        
        )
      })
      }
        </section>
    </div>
  )
}

export default CardList