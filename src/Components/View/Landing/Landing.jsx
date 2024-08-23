import React, { useEffect, useState } from 'react'
import fondo from "../../../Images/fondo marvel.jpg"
import { Link } from 'react-router-dom'


function Landing({apiAvenger, avenger}) {

  const [isButtonDisabled, setIsButtonDisabled ]= useState(true);
  const [option, setOption] = useState("")
//let isButtonDisabled = true
useEffect(()=>{
  if (avenger.length === 0 ){
    setIsButtonDisabled (true)
    setOption("wait while the superheroes prepare")
  }else{
    setIsButtonDisabled (false);
    setOption("Press Enter")
  }

},[avenger])

  useEffect(()=>{
    apiAvenger()
  },[])

  return (
    <div>
      <img src={fondo} alt="imagen fondo landing" />
      <h3>{option}</h3>
      <Link to={`/home`}>
        <button disabled={isButtonDisabled}>Enter</button>
      </Link>
    </div>
  )
}

export default Landing