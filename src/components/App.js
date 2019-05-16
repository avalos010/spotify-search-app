import React, { useState, createContext, useEffect } from "react";
import "../App.css";
import Search from "./Search";
import TrackList from "./TrackList";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState({});
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch("https://spotify-backend-api.herokuapp.com/"); //To wake up the heroku server
  }, []);

  const handleSearchSubmit = async (e, setter) => {
    e.preventDefault();
    setTerm(e.target[0].value);
    const response = await fetch(
      "https://spotify-backend-api.herokuapp.com/search",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ term: e.target[0].value })
      }
    );

    const json = await response.json();
    setData(json);
  };

  return (
    <div className="App">
      <DataContext.Provider value={{ data, handleSearchSubmit }}>
        <div className="intro">
          <h1> Spotify Track Search </h1>
          <Search />
        </div>
        {term.length > 0 && <h3> Search Results for {term}</h3>}
        <TrackList />
      </DataContext.Provider>
    </div>
  );
}

export default App;
