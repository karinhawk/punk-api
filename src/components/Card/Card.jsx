import React from "react"
import "./Card.scss"

const Card = (props) => {
    const { name, description, image } = props
    return (
        <div className="card">
            <img className="card__image" src={image} alt="beer" />
            <h2 className="card__heading">{name}</h2>
            <div className="card__text">
                <p className="card__description">{description}</p>
            </div>
        </div>
    )
}
export default Card