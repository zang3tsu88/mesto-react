function PopupWithForm({ title, name, children }) {
  return (
    <div className={`popup popup_type_${name}`}>
      <div className="popup__window">
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть попап"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form popup__form_type_confirm"
          name="confirm"
          method="POST"
        >
          <button className="popup__submit-btn" type="submit" aria-label="Да">
            Да
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm
