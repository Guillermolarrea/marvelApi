import React from 'react'
import NavBar from '../../NavBar/NavBar'
import s from './Home.module.css'
import { Link } from 'react-router-dom'

function Home({ search }) {


    return (
        <div className={s.conteinerHome}>
            <div className={s.conteinerNavBar}>
                <NavBar />
            </div>
            <div className={s.conteinerCards}>
                <Link to={'/cards'} className={s.lnk1}>
                    <button className={`${s.btn} ${s.btn1}`}>Characters</button>
                </Link>
                <Link to={'/Comics'} className={s.lnk2}>
                    <button className={`${s.btn} ${s.btn2}`}>Comics</button>
                </Link>
                <Link to={'/Creators'} className={s.lnk3}>
                    <button className={`${s.btn} ${s.btn3}`}>Creators</button>
                </Link>
                <Link to={'/series'} className={s.lnk4}>
                    <button className={s.btn}>Series</button>
                </Link>
                <Link to={'/stories'} className={s.lnk5}>
                    <button className={s.btn}>Stories</button>
                </Link>
            </div>
        </div>
    )
}

export default Home