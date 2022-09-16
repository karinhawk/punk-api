import React from "react"
import { Link } from "react-router-dom"
import "./Card.scss"

const Card = (props) => {
    const { name, image, alcoholContent, tagline, beerId } = props
    return (
        <div className="card">
            <div className="hover-wrap">
                <Link to={`/beer/${beerId}`}>
                    <img className="card__image" src={image} alt="beer" />
                </Link>
            </div>
            <div className="card__content">
                <h2 className="card__heading">{name}</h2>
                <h3 className="card__abv">{`${alcoholContent}% abv`}</h3>
                <h3 className="card__tagline">{tagline}</h3>
            </div>
        </div>
    )
}
export default Card