import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_type_profile">
        <div className="popup__window">
          <button
            className="popup__close-btn"
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__form popup__form_type_edit-profile"
            name="editProfileFormPopup"
            method="POST"
            noValidate
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
            <button
              className="popup__submit-btn"
              type="submit"
              aria-label="Сохранить изменения"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add-image">
        <div className="popup__window">
          <button
            className="popup__close-btn"
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Новое место</h2>
          <form
            className="popup__form popup__form_type_add-img"
            name="addImageFormPopup"
            method="POST"
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
            <button
              className="popup__submit-btn"
              type="submit"
              aria-label="Сохранить изменения"
            >
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_open-image">
        <figure className="popup__image-figure">
          <button
            className="popup__close-btn"
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <img className="popup__image" src="#" alt="" />
          <figcaption className="popup__image-title"></figcaption>
        </figure>
      </div>

      <div className="popup popup_type_confirm">
        <div className="popup__window">
          <button
            className="popup__close-btn"
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Вы уверены?</h2>
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

      <div className="popup popup_type_change-avatar">
        <div className="popup__window">
          <button
            className="popup__close-btn"
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            className="popup__form popup__form_type_change-avatar"
            name="changeAvatar"
            method="POST"
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
            <button
              className="popup__submit-btn"
              type="submit"
              aria-label="Сохранить изменения"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <template className="cards__item-template">
        <li className="cards__item">
          <button className="cards__trash" aria-label="Удалить фото"></button>
          <img className="cards__image" src="#" alt="#" />
          <div className="cards__description">
            <h2 className="cards__title"></h2>
            <div className="cards__like-container">
              <button
                className="cards__like"
                aria-label="Лайкнуть фото"
                type="button"
              ></button>
              <p className="cards__counter"></p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;