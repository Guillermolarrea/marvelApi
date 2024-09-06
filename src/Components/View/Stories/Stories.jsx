import React from 'react';
import NavBar from '../../NavBar/NavBar';
import s from './Stories.module.css'

function Stories() {
  const ave = JSON.parse(localStorage.getItem('avenger'))
  const av = ave.stories

  console.log(av)

  return (
    <div>
      <NavBar />
      <div className={s.conteiner}>
        <h1>STORIES</h1>
        {av.map(serie => (
          <div key={serie.id}>
            <br />
            <hr />
            <h3 className={s.cadaStorie}>{serie.title}</h3>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stories