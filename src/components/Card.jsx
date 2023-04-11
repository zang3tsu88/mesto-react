import React from 'react'

function Card({ card, onCardClick }) {
  return (
    <li className="cards__item">
      <button className="cards__trash" aria-label="Удалить фото" />
      <img
        className="cards__image"
        src={card.link}
        alt={card.name}
        onClick={onCardClick}
      />
      <div className="cards__description">
        <h2 className="cards__title">{card.name}</h2>
        <div className="cards__like-container">
          <button
            className="cards__like"
            aria-label="Лайкнуть фото"
            type="button"
          />
          <p className="cards__counter">{card.likes.length}</p>
        </div>
      </div>
  </li>)
}

export default Card
