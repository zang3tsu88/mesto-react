import classNames from "classnames";

function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  onClose,
  onSubmit,
  buttonText,
}) {
  return (
    <div
      className={classNames("popup", `popup_type_${name}`, {
        popup_active: isOpen,
      })}
    >
      <div className="popup__window">
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть попап"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          onSubmit={onSubmit}
          className={`popup__form popup__form_type_${name}`} // тут обычный класс или {name}. АПДЕЙТ: Может этот класс вообще не нужен. Он не используется в стилях
          name={name}
          method="POST"
          noValidate // может не надо
        >
          {children}
          <button
            className="popup__submit-btn"
            type="submit"
            aria-label={buttonText}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
