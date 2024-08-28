import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Components/View/Landing/Landing';
import Home from './Components/View/Home/Home';
import Details from './Components/View/Details/Details';
import About from './Components/View/About/About';
import Comics from './Components/Comics/Comics';


// const myKey = 'd56e113cafc45472bab8a9e33ad471f65d1b5f84';

function App() {
  const [newAvenger, setAvenger]= useState({
    character: [],
    comics: [],
    creators: [],
    events: [],
    series: [],
    stories: []
  });
  console.log(newAvenger)
  localStorage.setItem(`avenger`, JSON.stringify(newAvenger))
  
  const avenger = JSON.parse(localStorage.getItem(`avenger`)) 
  //const apiKey = '7141e3accc16a86b42a08f3627ca0401'

  let allCharacter 
  const apiAvenger = () => {
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=7141e3accc16a86b42a08f3627ca0401&hash=5674cf7351650a8d4686d756e6be22d4`)
    .then(resp => resp.json())
    .then((r) => {
      if(r !== undefined){
        allCharacter = r.data.results;
        //console.log(character)
        setAvenger((newAvenger) =>({...newAvenger, character: allCharacter}))
      }      
    })
    fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=7141e3accc16a86b42a08f3627ca0401&hash=5674cf7351650a8d4686d756e6be22d4`)
    .then(resp=> resp.json())
    .then((r)=>{
      if(r !== undefined){
        setAvenger((newAvenger)=>({...newAvenger, comics: r.data.results}))
      }
    })
  }


  const search = (id) =>{
   let data = avenger.character.filter((a) => a.id === parseInt(id))
  //  console.log(data)
      if(data.length > 0){return data
    }else {
      return `hola`
    };
  }
  
 
  return (
     <div>
      <Routes>
        <Route path= {`/`} element={<Landing apiAvenger= {apiAvenger} newAvenger={newAvenger}/>}/>
        <Route path={`/details/:id`}  element ={<Details  search={search}/>}/>
        <Route path={`/home`} element={<Home search={search}/>}/>
        <Route path={`/about`} element={<About/>}/>
        <Route path={`/comics`} element={<Comics/>} search={search}/>
      </Routes>
    </div>
  );
}

export default App;
