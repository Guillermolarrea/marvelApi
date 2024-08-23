import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Components/View/Landing/Landing';
import Home from './Components/View/Home/Home';
import Details from './Components/View/Details/Details';
import About from './Components/View/About/About';


// const myKey = 'd56e113cafc45472bab8a9e33ad471f65d1b5f84';

function App() {
  const [newAvenger, setAvenger]= useState([]);
  console.log(newAvenger)
  localStorage.setItem(`avenger`, JSON.stringify(newAvenger))
  
  const avenger = JSON.parse(localStorage.getItem(`avenger`)) 
  //const apiKey = '7141e3accc16a86b42a08f3627ca0401'

  let character 
  const apiAvenger = () => {
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=7141e3accc16a86b42a08f3627ca0401&hash=5674cf7351650a8d4686d756e6be22d4`)
    .then(resp => resp.json())
    .then((r) => {
      if(r !== undefined){
        character = r.data.results;
        //console.log(character)
        setAvenger(newAvenger => [...newAvenger, character])
      }      
    })
    
  }

  const search = (id) =>{
   let data = avenger[0].filter((a) => a.id === parseInt(id))
  //  console.log(data)
      if(data.length > 0){return data
    }else {
      return `hola`
    };
  }
  
 
  return (
    <div className="App">
      <Routes>
        <Route path= {`/`} element={<Landing apiAvenger= {apiAvenger} avenger= {avenger}/>}/>
        <Route path={`/details/:id`}  element ={<Details  search={search}/>}/>
        <Route path={`/home`} element={<Home search={search}/>}/>
        <Route path={`/about`} element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
