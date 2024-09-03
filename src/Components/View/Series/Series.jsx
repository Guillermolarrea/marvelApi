import React from 'react'
import NavBar from '../../NavBar/NavBar'
import s from './Series.module.css'

function Series({ search }) {
    const ave = JSON.parse(localStorage.getItem('avenger'))
    const av = ave.series
    console.log(av)

    return (
        <div>
            <NavBar />
            <div className={s.conteiner}>
                {av.map((serie) => (
                    <div key={s.id} className={s.cadaSerie}>
                        <h1>{serie.title}</h1>
                        <h3>Characters</h3>
                        <div className={s.conteinerTresColumns}>
                            {serie.characters.items.length !== 0 ? serie.characters.items.map(c => (
                                <div key={c.name}>
                                    <h4>{c.name}</h4>
                                </div>
                            )) : 'not found characters'}
                            <h3>Comics</h3>
                            {serie.comics.items.length !== 0 ? serie.comics.items.map(c => (
                                <div key={c.name}>
                                    <h4>{c.name}</h4>
                                </div>
                            )) : 'not found comics'}
                            <h3>Stories</h3>
                            {serie.stories.items.length !== 0 ? serie.stories.items.map(c => (
                                <div key={c.name}>
                                    <h4>{c.name}</h4>
                                </div>
                            )) : 'not found stories'}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Series