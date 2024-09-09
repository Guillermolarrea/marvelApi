import { useParams } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar';
import s from './Details.module.css'


function Details({ searchComics, searchCharacter, searchCreators }) {

  const { type, id } = useParams()
  console.log(type, id)


  let data
  if (type === `cards`) {
    data = searchCharacter(id)
    return (
      <div className={s.conteinerGral}>
        <NavBar />
        <div className={s.conteinerDetails}>
          <h2>{data[0].name}</h2>
          <img className={s.images} src={data[0].thumbnail.path + "." + data[0].thumbnail.extension} alt="" />
          <p>Description: {data[0].description}</p>
        </div>
      </div>
    )

  } else if (type === `comics`) {
    data = searchComics(id)
    return (
      <div className={s.conteinerGral}>
        <NavBar />
        <div className={s.conteinerDetails}>
          <h2>{data[0].title}</h2>
          <img className={s.images} src={data[0].thumbnail.path + "." + data[0].thumbnail.extension} alt="" />
          <h1>esto es comics</h1>
        </div>
      </div>
    )
  } else if (type === 'creators') {
    data = searchCreators(id)

    return (
      <div className={s.conteinerGral}>
        <NavBar />
        <div className={s.conteinerDetails}>
          <h2 className={s.nameCreator}>{data[0].fullName}</h2>
          <div className={s.detailsCreators}>
            <div className={s.creatorCadaDetails} style={{ backgroundColor: 'rgb(230, 211, 188)' }}>
              {data[0].comics.available === 0 ? (<div>
                <h3>Comics</h3>
                <h4>No posee comics</h4>
              </div>
              ) : (
                <div>
                  <h3>Comics</h3>
                  {data[0].comics.items.map((c) => (
                    <h4 key={c.name}>{c.name}</h4>
                  ))}
                </div>
              )}
            </div>
            <div className={s.creatorCadaDetails} style={{ backgroundColor: 'rgb(207, 192, 174)' }}>
              {data[0].series.available === 0 ? (<div>
                <h3>Series</h3>
                <h4>No posee series</h4>
              </div>
              ) : (
                <div>
                  <h3>Series</h3>
                  {data[0].series.items.map((e) => (
                    <h4 key={e.name}>{e.name}</h4>
                  ))}
                </div>
              )}
            </div>
            <div className={s.creatorCadaDetails} style={{ backgroundColor: 'rgb(189, 174, 157)' }}>
              {data[0].stories.available === 0 ? (<div>
                <h3>Stories</h3>
                <h4>No posee stories</h4>
              </div>
              ) : (
                <div>
                  <h3>Stories</h3>
                  {data[0].stories.items.map((s) => (
                    <h4 key={s.name}>{s.name}</h4>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default Details