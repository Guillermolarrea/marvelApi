/* eslint-disable array-callback-return */
import React from 'react'
import NavBar from '../../NavBar/NavBar';
import { CardCreators } from '../../CardCreators/CardCreators';
import s from '../../StylosCompartidos/conteinersCards.module.css'
import { Link } from 'react-router-dom';



function Creators({ type }) {

  const crea = JSON.parse(localStorage.getItem('avenger'))


  return (
    <div className={s.conteinerGral}>
      <NavBar type={type}/>
      <div className={s.conteinerCreatorsCards}>
        {crea.creators.map(c => (
          <Link key={c.id} to={`/details/creators/${c.id}`}>
            <CardCreators
              name={c.fullName}
            />
          </Link>
        ))}
      </div>
    </div>
  )

}

export default Creators