/* eslint-disable array-callback-return */
import React from 'react'
import Card from '../../Card/Card'
import NavBar from '../../NavBar/NavBar'
import s from '../../StylosCompartidos/conteinersCards.module.css'
import { Link } from 'react-router-dom'



function Comics({ type }) {
  let com = JSON.parse(localStorage.getItem('avenger'))
  let comic = []
  com.comics.forEach(c => {
    if (c.images.length !== 0) {
      comic.push(c)
    }
  });
  console.log(type)

  return (
    <div className={s.conteinerGral}>
      <NavBar type={type} />
      <div className={s.conteinerCards}>
        {comic.map((c) =>
          <Link key={c.id} to={`/details/comics/${c.id}`}>
            <Card
              id={c.id}
              name={c.title}
              thumbnail={c.thumbnail}
            />
          </Link>
        )}
      </div>
    </div>
  )
}

export default Comics