
import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from './searchBar.module.css'

const SearchBar = () => {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
 
  const av = JSON.parse(localStorage.getItem(`avenger`))
  const ave = av.character
  console.log(ave)

  // Manejar el cambio en el input
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filtrar las sugerencias
    if (value.length > 0) {
      const filteredSuggestions = ave.filter((p) =>
        p.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };
  


  return (
    <div>
      <button className={s.button}>Search</button>
      <input
      className={s.imput}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
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
};

export default SearchBar;
