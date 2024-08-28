import { useParams } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar';
import s from './Details.module.css'


function Details({ search }) {

  const id = useParams()

  let data = search(id.id)

  return (
    <div>
      <NavBar/>
      <div className={s.conteinerDetails}>
        <h2>{data[0].name}</h2>
        <img className={s.images} src={data[0].thumbnail.path + "." + data[0].thumbnail.extension} alt="" />
        <p>Description: {data[0].description}</p>
      </div>
    </div>
  )
}

export default Details