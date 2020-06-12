import React , {useEffect, useState, createContext}from 'react';
// Axios
import clienteAxios from './config/axios'
import './App.css';
import Clima from './components/clima';
import OtrasCiudades from './components/otrasCiudades'
import Forecast from './components/Forecast'

export const MyContext = createContext([]);




function App() {
// HARDCODE CITIES
const [ciudades] = useState([3430668, 3833367, 3843123, 3429886, 3844421])
const [localCity, setLocalCity] = useState(null)
const [miCity, setMiCity] = useState(null)
const [actualWeathers, setActualWeathers] = useState([])
const [forecast, setForecast] = useState({})

// FECHT MAIN CITY AND OTHER FIVE
useEffect(() => {
  async function currentMainCity() {
    const { data } = await clienteAxios.get('http://localhost:5000/v1/location')
    setLocalCity(data)
    setMiCity(data)
  }
  async function fetchCitiesWeathers() {
    const promesis = ciudades.map(async (city) => {
      const { data } = await clienteAxios.get(`http://localhost:5000/v1/current/${city}`)
      return data
    })
    const weathers = await Promise.all(promesis)
    setActualWeathers(weathers)
  }

  currentMainCity()
  fetchCitiesWeathers()
}, [ciudades])

useEffect(() => {
  async function mainForecast() {
    const {data} = await clienteAxios.get('http://localhost:5000/v1/forecast')
    setForecast(data)
  }
  mainForecast()
}, [])

const changeCity = async (id) => {
  
  if (miCity.id !== id) {
    
    setMiCity(actualWeathers[actualWeathers.findIndex((el) => el.id === id)])
    const {data} = await clienteAxios.get(`http://localhost:5000/v1/forecast/${id}`)
    setForecast(data)
   
    if (actualWeathers.findIndex((el) => el.id === localCity.id) === -1) {
      setActualWeathers([...actualWeathers, localCity])
    }
  }
}

  

  return (
   
    <div className="App">
      
      <MyContext.Provider value={miCity}>
        <Clima value={miCity} />
        <OtrasCiudades 
        actualWeathers={actualWeathers}
        changeCity={changeCity}/>
        </MyContext.Provider>
       < Forecast forecast={forecast}/>
      
    </div>
   
  );
}

export default App;
