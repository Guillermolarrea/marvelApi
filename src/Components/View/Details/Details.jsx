import { useParams } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar'


function Details({ search }) {
  console.log(search)
  const id = useParams()
  console.log(id.id)
  let data = search(id.id)
  console.log(data)
  return (
    <div>
      <NavBar/>
      <div>
        <h1>{data[0].name}</h1>
        <img src={data[0].thumbnail.path + "." + data[0].thumbnail.extension} alt="" />
        <p>Description: {data[0].description}</p>
      </div>
    </div>
  )
}

export default Details