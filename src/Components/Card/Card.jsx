import { Link } from "react-router-dom"
const Card = (avenger) => {

    return (
        <div>
            <Link to={`/details/${avenger.id}`}>
                <h1>Name:{avenger.name}</h1>
                <h3> id:{avenger.id}</h3>
                <img src={avenger.thumbnail.path + "." + avenger.thumbnail.extension} alt="" />
            </Link>
        </div>
    )
}

export default Card