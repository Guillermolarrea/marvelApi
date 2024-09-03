import React from 'react'
import NavBar from '../../NavBar/NavBar'
import s from './Series.module.css'

function Series({ search }) {
    const ave = JSON.parse(localStorage.getItem('avenger'))
    const av = ave.series
    console.log(av)

    return (
        <div className={s.conteinerGral}>
            <NavBar />
                <h1>SERIES</h1>
            <div className={s.conteiner}>
                {av.map((serie) => (
                    <div key={s.id} className={s.cadaSerie}>
                        <h3 className={s.title}>{serie.title}</h3>
                        <div className={s.conteinerTresColumns}>
                            <div className={s.characters}>
                                <h3>Characters</h3>
                                {serie.characters.items.length !== 0 ? serie.characters.items.map(c => (
                                    <p key={c.name}>
                                        <h4>{c.name}</h4>
                                    </p>
                                )) : <p>Not found characters</p>}
                            </div>
                            <div className={s.comics}>
                                <h3>Comics</h3>
                                {serie.comics.items.length !== 0 ? serie.comics.items.map(c => (
                                    <p key={c.name}>
                                        <h4>{c.name}</h4>
                                    </p>
                                )) : <p>not found comics</p>}
                            </div>
                            <div className={s.stories}>
                                <h3>Stories</h3>
                                {serie.stories.items.length !== 0 ? serie.stories.items.map(c => (
                                    <p key={c.name}>
                                        <h4>{c.name}</h4>
                                    </p>
                                )) : <p>not found stories</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Series