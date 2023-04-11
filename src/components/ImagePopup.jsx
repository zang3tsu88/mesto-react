function ImagePopup({ onClose, card }) {
  return (
    <div className={`popup popup_type_open-image ${card.link && "popup_active"}`}>
      <figure className="popup__image-figure">
        <button
          onClick={onClose}
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть попап"
        />
        <img className="popup__image" src={card.link} alt={card.name} />
        <figcaption className="popup__image-title">{card.name}</figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup
