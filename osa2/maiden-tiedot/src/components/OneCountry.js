import { useEffect } from "react"
import axios from "axios"
import { useState} from 'react'

export const OneCountry = ({country, api_key}) => {

//säätieto
const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${api_key}`)
        .then(response => {
            setWeatherData(response.data)
        })
    // eslint-disable-next-line
    }, [])

    if (weatherData) {
        console.log(country)
        console.log(weatherData)
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>capital: {country.capital}</p>
                <p>area: {country.area}</p>

                <h2>Languages:</h2>
                <ul>
                    {Object.values(country.languages).map(language => <li key = {language}> {language} </li>)}
                </ul>

                <img src={country.flags.png} alt='' />

                <h2> Weather in {country.capital}</h2>
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt='' />
                <p> Temperature {weatherData.main.temp} celcius </p>
                <p> Wind {weatherData.wind.speed} m/s </p>
            </div>
        )
    } else {
        return(null)
    }
}