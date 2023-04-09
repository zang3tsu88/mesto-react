function handleEditAvatarClick() {
  document.querySelector(".popup_type_change-avatar").classList.add("popup_active")
}
function handleEditProfileClick() {
  document.querySelector(".popup_type_profile").classList.add("popup_active")
}
function handleAddPlaceClick() {
  document.querySelector(".popup_type_add-image").classList.add("popup_active")
}


function Main() {
  return (
    <main className="main">
      <section className="profile">
        <button
          onClick={handleEditAvatarClick}
          className="profile__avatar-btn"
        >
          <img
            className="profile__avatar"
            src="<%=require('./images/avatar_jack_iv_kusto.jpg')%>"
            alt="Аватарка пользователя"
          />
        </button>
        <div className="profile__user-info">
          <h1 className="profile__user-name">Жак-Ив Кусто</h1>
          <button
            onClick={handleEditProfileClick}
            className="profile__edit-btn"
            type="button"
            aria-label="Редактировать профиль"
          ></button>
          <p className="profile__user-occupation">Исследователь океана</p>
        </div>
        <button
          onClick={handleAddPlaceClick}
          className="profile__btn-add-img"
          type="button"
          aria-label="Добавить изображение"
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </main>
  )
}

export default Main
