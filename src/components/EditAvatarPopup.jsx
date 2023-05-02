import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  useEffect(() => {
    inputRef.current.value = "";
  }, [onClose]);

  return (
    <PopupWithForm
      title={"Обновить аватар"}
      name={"change-avatar"}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_avatar-url"
        id="avatar-url-input"
        name="avatar"
        type="url"
        placeholder="Ссылка на картинку"
        required
        ref={inputRef}
      />
      <span className="popup__input-error-msg avatar-url-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
