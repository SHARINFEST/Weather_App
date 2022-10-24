import nubes from './assets/nubes.gif'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  

  useEffect(() => {
    // esa funcion se ejecuta cuando llega la info de la ubicacion que es lo de geolocation
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCords(obj);

    }

    //esto hace un llamadoa la api del navegador para usar la ubicaciona actual
    navigator.geolocation.getCurrentPosition(success)
  }, [])
 

  // -------------------------peticion del clima------------

  useEffect(() => {
    if (coords){
    const APIKEY = 'a1a46c82bc55abd8c9490dcd59b282ad'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
  axios.get(URL)
  .then(res => {
const celcius = (res.data.main.temp -273.15).toFixed(1)
const farent = (celcius * 9 / 5 +32).toFixed(1)
setTemp({celcius, farent})
    setWeather(res.data)})
  .catch(err => console.log(err))  
  }


  }, [coords])


  return (
    <div className="App" style={{backgroundImage : `url(${nubes})`,
    position:'absolute',backgroundSize:'cover'}}>
      {
        weather ? 
      <WeatherCard 
      nubes={nubes}
      weather={weather}
      temp={temp} /> 
      :
      <Loading />
}
    </div>
  )
}

export default App
