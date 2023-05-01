import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const nameRef = useRef();
  const linkRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }

  // меня напрягает что тут и в EditProfilePopup я дублирую этот код(обнуляю поля). Как можно сделать так чтобы этого избежать.
  useEffect(() => {
    nameRef.current.value = "";
    linkRef.current.value = "";
  }, [onClose]);

  return (
    <PopupWithForm
      title={"Новое место"}
      name={"add-image"}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={"Создать"}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_image-title"
        id="image-title-input"
        name="name"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        ref={nameRef}
      />
      <span className="popup__input-error-msg image-title-input-error"></span>
      <input
        className="popup__input popup__input_type_image-url"
        id="url-input"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        required
        ref={linkRef}
      />
      <span className="popup__input-error-msg url-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
