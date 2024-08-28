import React from "react"
import Card from "../Card/Card";
import s from '../StylosCompartidos/conteinersCards.module.css'



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
                <Card
                    key={c.id}
                    id={c.id}
                    name={c.name}
                    thumbnail={c.thumbnail}
                    search={search(c.id)}
                />
            )}
        </div>
    )
}

export default Cards