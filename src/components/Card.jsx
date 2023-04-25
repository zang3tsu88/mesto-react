function Card({ card, onCardClick }) {

  // function handleClick() {
  //   onCardClick(card);
  // }

  return (
    <li className="cards__item">
      <button className="cards__trash" aria-label="Удалить фото" />
      <img
        className="cards__image"
        src={card.link}
        alt={card.name}
        // onClick={handleClick}
        onClick={() => onCardClick(card)}
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
