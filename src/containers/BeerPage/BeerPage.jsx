import React from 'react'
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import "./BeerPage.scss"

const BeerPage = (props) => {
    const { beersArr } = props;
    const { beerId } = useParams();
    console.log(beerId);
    console.log(beersArr);

    const chosenBeer = beersArr.find((beer) => { return beer.id == beerId });

    const foodPairings = chosenBeer.food_pairing;
    
    const foodList = foodPairings.join(" and ");

    return (
        <div className='beer-page'>
            <Link to="/">
            <h2 className='back'>Back to Beers</h2>
            </Link>
            <div className='beer-page__content'>
                <img className="beer-page__image" src={chosenBeer.image_url} alt="beer" />
                <h2 className="beer-page__heading">{chosenBeer.name}</h2>
                <h3 className="beer-page__tagline">{chosenBeer.tagline}</h3>
                <h3 className="beer-page__abv">{`${chosenBeer.abv}% abv`}</h3>
                <div className="beer-page__text">
                    <p className='beer-page__info'>{`${chosenBeer.name} is a ${chosenBeer.abv}% IPA first brewed on ${chosenBeer.first_brewed} which pairs well with ${foodList}.`}</p>
                    <p className="beer-page__description">{chosenBeer.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BeerPage