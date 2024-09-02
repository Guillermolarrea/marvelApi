/* eslint-disable array-callback-return */
import React from 'react'
import Card from '../../Card/Card'
import NavBar from '../../NavBar/NavBar'
import s from '../../StylosCompartidos/conteinersCards.module.css'
import { Link } from 'react-router-dom'



function Comics({ search }) {
  let com = JSON.parse(localStorage.getItem('avenger'))
  let comic = []
  com.comics.forEach(c => {
    if (c.images.length !== 0) {
      comic.push(c)
    }
  });

  return (
    <div className={s.conteinerGral}>
      <NavBar />
      <div className={s.conteinerCards}>
        {comic.map((c) =>
          <Link key={c.id} to={`/details/comics/${c.id}`}>
            <Card
              id={c.id}
              name={c.title}
              thumbnail={c.thumbnail}
              search={search(c.id)}
            />
          </Link>
        )}
      </div>
    </div>
  )
}

export default Comics