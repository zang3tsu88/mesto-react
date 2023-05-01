import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";
//in case avatar wont load from server
import defaultAvatarImage from "../images/loading_circle.gif";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

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
  }, []);

  useEffect(() => {
    function closeOnEsc(e) {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    }

    function closeOnOverlayClick(e) {
      if (e.target.classList.contains("popup_active")) {
        closeAllPopups();
      }
    }

    document.addEventListener("keyup", closeOnEsc);
    document.addEventListener("click", closeOnOverlayClick);

    return () => {
      document.removeEventListener("click", closeOnOverlayClick);
      document.removeEventListener("keyup", closeOnEsc);
    };
  });

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

  function handleUpdateUser(userInfo) {
    api
      .createNewUser(userInfo)
      .then((data) => setCurrentUser(data))
      .catch((err) => console.log(err));

    closeAllPopups();
  }

  function handleUpdateAvatar(userAvatar) {
    api
      .createNewAvatar(userAvatar)
      .then((data) => setCurrentUser(data))
      // как правильней?
      // И почему если { ...c, ...userAvatar } не в скобках, то VsCode ругается?
      // .then((userAvatar) => setCurrentUser((c) =>  { ...c, ...userAvatar }))
      // .then((userAvatar) => setCurrentUser((c) =>  ({ ...c, ...userAvatar })))
      // .then((userAvatar) => setCurrentUser({ ...currentUser, ...userAvatar }))
      .catch((err) => console.log(err));

    closeAllPopups();
  }

  function handleAddPlaceSubmit(userCard) {
    api
      .createNewCard(userCard)
      .then((newCard) => setCards([newCard, ...cards]))
      .catch((err) => console.log(err));

    closeAllPopups();
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

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

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
