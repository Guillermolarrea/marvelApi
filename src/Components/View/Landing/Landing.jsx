import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import s from './Landing.module.css'


function Landing({ apiAvenger, newAvenger }) {

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [option, setOption] = useState("")
  const av = JSON.parse(localStorage.getItem(`avenger`))
  // const ave = av[0]

  //let isButtonDisabled = true
  useEffect(() => {
    if (av.character.length === 0) {
      setIsButtonDisabled(true)
      setOption("wait while the superheroes prepare")
    } else {
      setIsButtonDisabled(false);
      setOption("Press Enter")
    }

  }, [av.character])

  useEffect(() => {
    apiAvenger()
  }, [])

  return (
    <div className={s.fondo}>
      <div className={s.conteinerButton}>
        <Link to={`/home`}>
          <button className={s.button} disabled={isButtonDisabled}>Enter</button>
        </Link>
        <h3 className={s.option}>{option}</h3>
      </div>
    </div>
  )
}

export default Landing