import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup({ isOpen, onClose, onCardDelete }) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete();
  }
  return (
    <PopupWithForm
      title={"Вы уверены?"}
      name={"confirm"}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={"Да"}
      onSubmit={handleSubmit}
    />
  );
}

export default ConfirmationPopup;
