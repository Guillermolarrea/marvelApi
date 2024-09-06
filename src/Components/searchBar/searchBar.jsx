
import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from './searchBar.module.css'

const SearchBar = ({type}) => {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

 console.log(type)
 
  const av = JSON.parse(localStorage.getItem(`avenger`))
  console.log(av)


  // Manejar el cambio en el input
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filtrar las sugerencias
    if (type === 'cards' && value.length > 0) {
      const filteredSuggestions = av.character.filter((p) =>
        p.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }else if (type === 'comics' && value.length > 0) {
      const filteredSuggestions = av.comics.filter((p) =>
        p.title.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }else if (type === 'creators' && value.length > 0) {
      const filteredSuggestions = av.creators.filter((p) =>
        p.fullName.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
     else {
      setSuggestions([]);
    }
  };

  if(type === 'cards'){
    return (
      <div>
        <button className={s.button}>Search</button>
        <input
        className={s.imput}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search Characters"
        />
        <ul className={s.ulImput}>
          {suggestions.map((suggestion) => (
              <Link key={suggestion.id} to= {`/details/${suggestion.id}`}>
            <li className={s.liOption} key={suggestion.id}>{JSON.stringify(suggestion.name, null, 2)}</li>
              </Link>
          ))}
        </ul>
      </div>
    );
  }
  else if (type === 'comics'){
    return (
      <div>
        <button className={s.button}>Search</button>
        <input
        className={s.imput}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search Comics"
        />
        <ul className={s.ulImput}>
          {suggestions.map((suggestion) => (
              <Link key={suggestion.id} to= {`/details/${type}/${suggestion.id}`}>
            <li className={s.liOption} key={suggestion.id}>{JSON.stringify(suggestion.title, null, 2)}</li>
              </Link>
          ))}
        </ul>
      </div>
    );
  }
  else if (type === 'creators'){
    return (
      <div>
        <button className={s.button}>Search</button>
        <input
        className={s.imput}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search Creators"
        />
        <ul className={s.ulImput}>
          {suggestions.map((suggestion) => (
              <Link key={suggestion.id} to= {`/details/${type}/${suggestion.id}`}>
            <li className={s.liOption} key={suggestion.id}>{JSON.stringify(suggestion.fullName, null, 2)}</li>
              </Link>
          ))}
        </ul>
      </div>
    );
  }
};

export default SearchBar;
