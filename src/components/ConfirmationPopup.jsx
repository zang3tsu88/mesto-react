import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup({ isOpen, onClose, onCardDelete, card }) {
  function handleCardDelete(e) {
    e.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      title={"Вы уверены?"}
      name={"confirm"}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={"Да"}
      onSubmit={handleCardDelete}
    />
  );
}

export default ConfirmationPopup;
