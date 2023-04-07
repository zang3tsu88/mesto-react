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
    </>

  )
}

export default App
