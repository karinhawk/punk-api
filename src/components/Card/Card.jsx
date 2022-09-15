import React from "react"
import { Link } from "react-router-dom"
import "./Card.scss"

const Card = (props) => {
    const { name, description, image, alcoholContent, tagline, beerId} = props
    return (
        <div className="card">
            <Link to={`/beer/${beerId}`}>
            <img className="card__image" src={image} alt="beer" />
            </Link>
            <h2 className="card__heading">{name}</h2>
            <h3 className="card__tagline">{tagline}</h3>
            <h3 className="card__abv">{`${alcoholContent}% abv`}</h3>
            <div className="card__text">
                <p className="card__description">{description}</p>
            </div>
        </div>
    )
}
export default Card