import "./App.css";
import { useState, useEffect } from "react";

import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [pokeData, setPokeData] = useState();
  const [searchPokeData, setSearchPokeData] = useState();

  const handlerChange = (e) => {
    setSearchPokeData(e.target.value);
  };

  useEffect(() => {
    axios.get(url + searchPokeData).then((res) => {
      setPokeData(res.data);
      console.log(res.data);
    });
  }, [searchPokeData]);

  return (
    <div className="App">
      <input
        className="select"
        value={searchPokeData}
        onChange={handlerChange}
      ></input>
      {pokeData && (
        <ul>
          <li>Name: {pokeData.name}</li>
          <li>Order: {pokeData.order}</li>
          <li>weight: {pokeData.weight}</li>
          <li>
            Stats:{" "}
            {pokeData.stats.map((stat, index) => {
              <ul>
                <li key={index}>
                  {stat.name} and {stat.base_stat}
                </li>
              </ul>;
            })}
          </li>
        </ul>
      )}
    </div>
  );
}

export default App;
