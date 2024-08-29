import React from 'react'
import Cards from '../Cards/Cards'
import NavBar from '../../NavBar/NavBar'
import s from './Home.module.css'

function Home({search}) {
    

    return (
        <div className={s.conteinerHome}>
            <div className={s.conteinerNavBar}>
                <NavBar/>
            </div>
            <div className={s.conteinerCards}>
                <Cards search={search} />
            </div>
        </div>
    )
}

export default Home