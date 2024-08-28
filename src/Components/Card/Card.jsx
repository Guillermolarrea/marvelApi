import { Link } from "react-router-dom"
import s from './Card.module.css'

const Card = (avenger) => {

    return (
        <div className={s.conteinerCard}>
            <Link to={`/details/${avenger.id}`}>
                <h3>{avenger.name}</h3>
                <img className={s.images} src={avenger.thumbnail.path + "." + avenger.thumbnail.extension} alt="" />
            </Link>
        </div>
    )
}

export default Card