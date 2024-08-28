/* eslint-disable array-callback-return */
import React from 'react'
import Card from '../Card/Card'
import NavBar from '../NavBar/NavBar'
import s from '../StylosCompartidos/conteinersCards.module.css'



function Comics() {
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
          <Card
            key={c.id}
            id={c.id}
            name={c.title}
            thumbnail={c.thumbnail}
          />
        )}
      </div>
    </div>
  )
}

export default Comics