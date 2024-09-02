import s from './Card.module.css'

const Card = (data) => {

    return (
        <div className={s.conteinerCard}>
            <h3>{data.name}</h3>
            <img className={s.images} src={data.thumbnail.path + "." + data.thumbnail.extension} alt="" />
        </div>
    )
}

export default Card