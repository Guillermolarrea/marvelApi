/* eslint-disable array-callback-return */
import React from 'react'
import NavBar from '../../NavBar/NavBar';
import { CardCreators } from '../../CardCreators/CardCreators';
import s from '../../StylosCompartidos/conteinersCards.module.css'
import { Link } from 'react-router-dom';


function Creators({ searchCreator }) {

  const crea = JSON.parse(localStorage.getItem('avenger'))
  const creator = []

  crea.creators.forEach(c => {
    if (c.fullName[0] !== '#') {
      creator.push(c)
    } 
  });
  crea.creators.forEach((c) => {
    if (c.fullName === "#O") {
      c.fullName = "Jhon Smith"
      creator.push(c);
    } else if (c.fullName === "#X") {
      c.fullName = "Joe Pepper"
      creator.push(c)
    }
  })

  return (
    <div className={s.conteinerGral}>
      <NavBar />
      <div className={s.conteinerCreatorsCards}>
        {creator.map(c => (
          <Link to={`/details/creators/${c.id}`}>
            <CardCreators
              key={c.id}
              name={c.fullName}
            />
          </Link>
        ))}
      </div>
    </div>
  )

}

export default Creators