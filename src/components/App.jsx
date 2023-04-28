import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";
//in case avatar wont load from server
import defaultAvatarImage from "../images/avatar_jack_iv_kusto.jpg";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "Loading name...",
    about: "Loading about...",
    avatar: defaultAvatarImage,
    // в будущем заменить на какую-нибудь картинку загрузки
    // (кружочек загрузки например. гифка или css)
  });

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  useEffect(() => {
    api
      .getCards()
      .then((res) => setCards(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getCurrentUser()
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(err));
    console.log(currentUser); // CONSOLE.LOG
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((like) => like._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateUser(currentUserInfo) {
    api
      .createNewUser(currentUserInfo)
      .then((userInfo) => setCurrentUser({ ...currentUser, userInfo }))
      .catch((err) => console.log(err));

    closeAllPopups();
  }

  function handleUpdateAvatar(currentUserAvatar) {
    api
      .createNewAvatar(currentUserAvatar)
      .then((userAvatar) => setCurrentUser({ ...currentUser, userAvatar }))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <PopupWithForm
          title={"Новое место"}
          name={"add-image"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText={"Создать"}
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
          />
          <span className="popup__input-error-msg image-title-input-error"></span>
          <input
            className="popup__input popup__input_type_image-url"
            id="url-input"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error-msg url-input-error"></span>
        </PopupWithForm>

        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
