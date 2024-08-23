
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
 
  const av = JSON.parse(localStorage.getItem(`avenger`))
  const ave = av[0]
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
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ul>
        {suggestions.map((suggestion) => (
            <Link to= {`/details/${suggestion.id}`}>
          <li key={suggestion.id}>{JSON.stringify(suggestion.name, null, 2)}</li>
            </Link>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
