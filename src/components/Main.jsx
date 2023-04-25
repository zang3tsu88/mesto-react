import { useState, useEffect } from "react"
import api from "../utils/Api"
import Card from "./Card"
//in case avatar wont load from server
import defaultAvatarImage from "../images/avatar_jack_iv_kusto.jpg"

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [ userName, setUserName ] = useState("Loading name...")
  const [ userDescription, setUserDescription ] = useState("Loading info...")
  const [ userAvatar, setUserAvatar ] = useState(defaultAvatarImage)
  const [ cards, setCards ] = useState([])

  useEffect(()=> {
    api.getCurrentUser()
    .then(res => {
      console.log(res);
      setUserName(res.name)
      setUserDescription(res.about)
      setUserAvatar(res.avatar)
    })
    .catch( err => console.log(err))
  }, [])

  useEffect(()=>{
    api.getCards()
    .then(res => setCards(res))
    .catch(err => console.log(err))
  },[])

  return (
    <main className="main">
      <section className="profile">
        <button
          onClick={onEditAvatar}
          className="profile__avatar-btn"
        >
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Аватарка пользователя"
          />
        </button>
        <div className="profile__user-info">
          <h1 className="profile__user-name">{userName}</h1>
          <button
            onClick={onEditProfile}
            className="profile__edit-btn"
            type="button"
            aria-label="Редактировать профиль"
          ></button>
          <p className="profile__user-occupation">{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__btn-add-img"
          type="button"
          aria-label="Добавить изображение"
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map(card => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
              />)
          })}
        </ul>
      </section>
    </main>
  )
}

export default Main
