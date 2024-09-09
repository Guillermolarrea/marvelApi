import React from 'react'
import NavBar from '../../NavBar/NavBar'
import s from './Home.module.css'
import { Link } from 'react-router-dom'

function Home({ search }) {


    return (
        <div className={s.conteinerHome}>
            <div>
                <NavBar />
            </div>
            <div className={s.conteinerCards}>
                <Link to={'/cards'} className={s.lnk1}>
                    <div className={`${s.btn} ${s.btn1}`}><span className={s.resaltar}>Characters</span></div>
                </Link>
                <Link to={'/Comics'} className={s.lnk2}>
                    <div className={`${s.btn} ${s.btn2}`}><span className={s.resaltar}>Comics</span></div>
                </Link>
                <Link to={'/Creators'} className={s.lnk3}>
                    <div className={`${s.btn} ${s.btn3}`}><span className={s.resaltar}>Creators</span></div>
                </Link>
                <Link to={'/series'} className={s.lnk4}>
                    <div className={`${s.btn} ${s.btn4}`}><span className={s.resaltar}>Series</span></div>
                </Link>
                <Link to={'/stories'} className={s.lnk5}>
                    <div className={`${s.btn} ${s.btn5}`}><span className={s.resaltar}>Stories</span></div>
                </Link>
            </div>
        </div>
    )
}

export default Home