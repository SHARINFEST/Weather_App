import React, { useState } from 'react'

const WeatherCard = ({weather, temp,nubes}) => {
    const [degrees, setDegrees] = useState(true)
  const changeTemp = () => setDegrees(!degrees) 

    console.log(weather)
  return (
   
    <article className='card'>

        <h1 className='card_title'>Weather App</h1>
        <h2 className='card_subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
        <section className='card_first_section'>
            <img className='card_icon' src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" /> 
            
        </section>
        <section className='card_second_section'>
            <h3 className='second_title'>"{weather?.weather[0].description}"</h3>
            <ul className='card_list'>
                <li className='list_icon'><span className='card_span'> Wind speed :</span> {weather?.wind.speed} m/s</li>
                <li className='list_icon'><span className='card_span'> Clouds :</span> {weather?.clouds.all} %</li>
                <li className='list_icon'><span className='card_span'> Pressure : </span> {weather?.main.pressure} hPa</li>
                </ul></section>
                <h2 className='card_temp'>{degrees ? `${temp?.celcius} °C` : `${temp?.farent} °F`}</h2>
                <button className='card_btn' onClick={changeTemp}>{degrees ? 'Change to °F' : 'Change to °C'}</button>
            
        
    </article>
  )
}

export default WeatherCard