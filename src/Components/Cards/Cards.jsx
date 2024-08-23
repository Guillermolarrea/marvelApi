import React from "react"
import Card from "../Card/Card"



const Cards = ({ search }) => {

    const av = JSON.parse(localStorage.getItem(`avenger`))
    const ave = av[0]

    return (
        <div>
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