import { useEffect, useState } from "react"
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from '../contexts/CurrentUserContext.jsx'
//in case avatar wont load from server
import defaultAvatarImage from "../images/avatar_jack_iv_kusto.jpg"


function App() {
  const [ currentUser, setCurrentUser ] = useState({
    name : "Loading name...",
    about : "Loading about...",
    avatar: defaultAvatarImage
    // в будущем заменить на какую-нибудь картинку загрузки
    // (кружочек загрузки например. гифка или css)
  });

  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = useState(false)
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = useState(false)
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = useState(false)
  const [ selectedCard, setSelectedCard ] = useState({name: "", link: ""} )
  const [ isImagePopupOpen, setIsImagePopupOpen ] = useState(false)

  useEffect(() => {
    api.getCurrentUser()
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err))
      console.log(currentUser) // console.log
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true)
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopupOpen(false)
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
            />
          <Footer />

          <PopupWithForm
            title={"Обновить аватар"}
            name={"change-avatar"}
            isOpen={isEditAvatarPopupOpen ? "popup_active" : ""}
            onClose={closeAllPopups}
            buttonText={"Сохранить"}
          >
            <input
              className="popup__input popup__input_type_avatar-url"
              id="avatar-url-input"
              name="avatar"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error-msg avatar-url-input-error"></span>
          </PopupWithForm>

          <PopupWithForm
            title={"Редактировать профиль"}
            name={"profile"}
            isOpen={isEditProfilePopupOpen ? "popup_active" : ""}
            onClose={closeAllPopups}
            buttonText={"Сохранить"}
          >
            <input
              className="popup__input popup__input_type_name"
              id="name-input"
              name="name"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input-error-msg name-input-error"></span>
            <input
              className="popup__input popup__input_type_occupation"
              id="occupation-input"
              name="about"
              type="text"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error-msg occupation-input-error"></span>
          </PopupWithForm>

          <PopupWithForm
            title={"Новое место"}
            name={"add-image"}
            isOpen={isAddPlacePopupOpen ? "popup_active" : ""}
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
            isOpen={isImagePopupOpen ? "popup_active" : ""}
            onClose={closeAllPopups}
            card={selectedCard}
          />

        </CurrentUserContext.Provider>
      </>
    );
}

export default App;