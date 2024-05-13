import logo from './logo.PNG';
import './App.css';
import React, { useEffect, useState } from "react";
import { CitiesList } from './ApiMethodes/cities';
import { temperature } from './ApiMethodes/meteo';

function App() {
  // let a =  CitiesList();
  // console.log(a)
  const [isChecked, setIsChecked] = useState(false);
  const [citiesData, setCitiesData] = useState([])
  const [temp, setTemp] = useState()
  const [town,setTown] = useState()
  const [pat,setPat] = useState()

  const fetchCities = async () => {
    const citiesData = await CitiesList(); // Appel de la méthode asynchrone CitiesList pour obtenir les données
    setCitiesData(citiesData)
    // console.log(citiesData)
    // return citiesData
  }
  const handleSubmit = async (e) => {
    setPat(true)
    setTemp()
    setTown()
    e.preventDefault(); 
    const t = await temperature(e.target.city.value); // Appel de la méthode asynchrone CitiesList pour obtenir les données   
    console.log("Method called for "+e.target.city.value)
    console.log(t)

    setTemp(t)
    setTown(e.target.city.value)
    setPat(false)
  }
  useEffect(() => {
    fetchCities()
  }, [])

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          liste des villes
        </p>
        <form onSubmit={handleSubmit}>
          {citiesData.map((city, index) => (
            <label key={index} className="mx-2">
              <input onChange={handleCheckboxChange} type="radio" name="city" value={city} />
              {city}
            </label>
            
          ))}
          <br/>
          
          { temp &&(
          <p>
            La temperature a <code>{town}</code> est de <code>{temp}</code>
          </p>)
          }
             { pat && (
          <p>
            Patientez
          </p>)
          }
              { !isChecked && (
          <p>
            selectionnez une ville
          </p>)
          }
          <button disabled={!isChecked} className="btn btn-outline-primary block"type="submit">
            Search
          </button>
        </form>

      </header>
    </div>
  );
}
export default App;
