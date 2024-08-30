import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Components/View/Landing/Landing';
import Home from './Components/View/Home/Home';
import Details from './Components/View/Details/Details';
import About from './Components/View/About/About';
import Comics from './Components/View/Comics/Comics';
import Cards from './Components/View/Cards/Cards';
import Creators from './Components/View/Creators/Creators';
const apiKey = process.env.REACT_APP_API_KEY;
const hashKey = process.env.REACT_APP_HASH_KEY;

function App() {
  const [newAvenger, setAvenger] = useState({
    character: [],
    comics: [],
    creators: [],
    events: [],
    series: [],
    stories: [],
  });
  console.log(newAvenger);
  localStorage.setItem(`avenger`, JSON.stringify(newAvenger));

  const avenger = JSON.parse(localStorage.getItem(`avenger`));

  let allCharacter;
  const apiAvenger = () => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hashKey}`
    )
      .then((resp) => resp.json())
      .then((r) => {
        if (r !== undefined) {
          allCharacter = r.data.results;
          //console.log(character)
          setAvenger((newAvenger) => ({
            ...newAvenger,
            character: allCharacter,
          }));
        }
      });
    fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${apiKey}&hash=${hashKey}`
    )
      .then((resp) => resp.json())
      .then((r) => {
        if (r !== undefined) {
          setAvenger((newAvenger) => ({
            ...newAvenger,
            comics: r.data.results,
          }));
        }
      });
    fetch(
      `http://gateway.marvel.com/v1/public/creators?ts=1&apikey=${apiKey}&hash=${hashKey}`
    )
      .then((creators) => creators.json())
      .then((creators) => {
        if (creators !== undefined) {
          setAvenger((newAvenger) => ({
            ...newAvenger,
            creators: creators.data.results,
          }));
        }
      });
  };

  const searchCharacter = (id) => {
    let data = avenger.character.filter((a) => a.id === parseInt(id));
    //  console.log(data)
    if (data.length > 0) {
      return data;
    } else {
      return console.error('No character found');
    }
  };

  const searchComics = (id) => {
    let data = avenger.comics.filter((a) => a.id === parseInt(id));
    //  console.log(data)
    if (data.length > 0) {
      return data;
    } else {
      return console.error('No comics found');
    }
  };

  const searchCreator = (id) => {
    let data = avenger.creators.filter(
      (creator) => creator.id === parseInt(id)
    );
    if (data.length > 0) {
      return data;
    } else {
      return console.error('No creator found');
    }
  };

  return (
    <div>
      <Routes>
        <Route
          path={`/`}
          element={
            <Landing
              apiAvenger={apiAvenger}
              newAvenger={newAvenger}
            />
          }
        />
        <Route
          path={`/details/:type/:id`}
          element={
            <Details
              searchCharacter={searchCharacter}
              searchComics={searchComics}
            />
          }
        />
        <Route
          path={`/home`}
          element={<Home search={searchCharacter} />}
        />
        <Route
          path={`/about`}
          element={<About />}
        />
        <Route
          path={`/comics`}
          element={<Comics search={searchComics} />}
        />
        <Route
          path={`/cards`}
          element={<Cards search={searchCharacter} />}
        />
        <Route
          path={'/creators'}
          element={<Creators search={searchCreator} />}
        />
      </Routes>
    </div>
  );
}

export default App;
