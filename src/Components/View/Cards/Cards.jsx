import React from "react"
import Card from "../../Card/Card";
import s from '../../StylosCompartidos/conteinersCards.module.css'
import { Link } from "react-router-dom";



const Cards = ({ search }) => {

    const av = JSON.parse(localStorage.getItem(`avenger`))
    const ave = []
    av.character.forEach(c => {
        if (c.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
            ave.push(c)
        }
    });

    return (
        <div className={s.conteinerCards}>
            {ave.map((c) =>
                <Link   key={c.id} to={`/details/cards/${c.id}`}>
                    <Card                      
                        id={c.id}
                        name={c.name}
                        thumbnail={c.thumbnail}
                        search={search(c.id)}
                    />
                </Link>
            )}
        </div>
    )
}

export default Cards