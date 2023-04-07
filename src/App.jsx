import { useState } from 'react'

function App() {

  return (
    <>
      <header class="header">
        <img
          class="header__logo"
          src="<%=require('./images/logo-mesto_color_white.svg')%>"
          alt="логотип
        место россия"
        />
      </header>
      <main class="main">
        <section class="profile">
          <button class="profile__avatar-btn">
            <img
              class="profile__avatar"
              src="<%=require('./images/avatar_jack_iv_kusto.jpg')%>"
              alt="Аватарка пользователя"
            />
          </button>
          <div class="profile__user-info">
            <h1 class="profile__user-name">Жак-Ив Кусто</h1>
            <button
              class="profile__edit-btn"
              type="button"
              aria-label="Редактировать профиль"
            ></button>
            <p class="profile__user-occupation">Исследователь океана</p>
          </div>
          <button
            class="profile__btn-add-img"
            type="button"
            aria-label="Добавить изображение"
          ></button>
        </section>
        <section class="cards">
          <ul class="cards__list">
          </ul>
        </section>
      </main>
      <footer class="footer">
        <p class="footer__copyright" lang="en">&copy; 2022. Mesto Russia</p>
      </footer>

      <div class="popup popup_type_profile">
        <div class="popup__window">
          <button
            class="popup__close-btn"
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form
            class="popup__form popup__form_type_edit-profile"
            name="editProfileFormPopup"
            method="POST"
            novalidate
          >
            <input
              class="popup__input popup__input_type_name"
              id="name-input"
              name="name"
              type="text"
              placeholder="Имя"
              minlength="2"
              maxlength="40"
              required
            />
            <span class="popup__input-error-msg name-input-error"></span>
            <input
              class="popup__input popup__input_type_occupation"
              id="occupation-input"
              name="about"
              type="text"
              placeholder="О себе"
              minlength="2"
              maxlength="200"
              required
            />
            <span class="popup__input-error-msg occupation-input-error"></span>
            <button
              class="popup__submit-btn"
              type="submit"
              aria-label="Сохранить изменения"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div class="popup popup_type_add-image">
        <div class="popup__window">
          <button
            class="popup__close-btn"
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 class="popup__title">Новое место</h2>
          <form
            class="popup__form popup__form_type_add-img"
            name="addImageFormPopup"
            method="POST"
          >
            <input
              class="popup__input popup__input_type_image-title"
              id="image-title-input"
              name="name"
              type="text"
              placeholder="Название"
              minlength="2"
              maxlength="30"
              required
            />
            <span class="popup__input-error-msg image-title-input-error"></span>
            <input
              class="popup__input popup__input_type_image-url"
              id="url-input"
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span class="popup__input-error-msg url-input-error"></span>
            <button
              class="popup__submit-btn"
              type="submit"
              aria-label="Сохранить изменения"
            >
              Создать
            </button>
          </form>
        </div>
      </div>

      <div class="popup popup_type_open-image">
        <figure class="popup__image-figure">
          <button
            class="popup__close-btn"
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <img class="popup__image" src="#" alt="" />
          <figcaption class="popup__image-title"></figcaption>
        </figure>
      </div>

      <div class="popup popup_type_confirm">
        <div class="popup__window">
          <button
          class="popup__close-btn"
          type="button"
          aria-label="Закрыть попап"
          ></button>
        <h2 class="popup__title">Вы уверены?</h2>
        <form
        class="popup__form popup__form_type_confirm"
        name="confirm"
        method="POST"
        >
          <button class="popup__submit-btn" type="submit" aria-label="Да">
            Да
          </button>
        </form>
      </div>
      </div>

      <div class="popup popup_type_change-avatar">
        <div class="popup__window">
          <button
            class="popup__close-btn"
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 class="popup__title">Обновить аватар</h2>
          <form
          class="popup__form popup__form_type_change-avatar"
          name="changeAvatar"
            method="POST"
            >
            <input
            class="popup__input popup__input_type_avatar-url"
              id="avatar-url-input"
              name="avatar"
              type="url"
              placeholder="Ссылка на картинку"
              required
              />
              <span class="popup__input-error-msg avatar-url-input-error"></span>
              <button
              class="popup__submit-btn"
              type="submit"
              aria-label="Сохранить изменения"
            >
            Сохранить
          </button>
        </form>
        </div>
      </div>

      <template class="cards__item-template">
        <li class="cards__item">
          <button class="cards__trash" aria-label="Удалить фото"></button>
          <img class="cards__image" src="#" alt="#" />
          <div class="cards__description">
            <h2 class="cards__title">
            </h2>
            <div class="cards__like-container">
              <button
              class="cards__like"
              aria-label="Лайкнуть фото"
              type="button"
              ></button>
              <p class="cards__counter"></p>
            </div>
          </div>
        </li>
      </template>
    </>
  )
}

export default App
