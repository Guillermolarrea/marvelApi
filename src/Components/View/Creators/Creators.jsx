import React from 'react'

function Creators({searchCreator}) {
  
  const crea = JSON.parse(localStorage.getItem('avenger'))
  const creator = []

  crea.creators.forEach(c=> {
    if(c.fullName[0] !== '#'){
      creator.push(c)
    }else{
      console.error('no se encontro nada');
      
    }
  });
  console.log(creator)
  return (
    <div>Creators</div>
  )
}

export default Creators