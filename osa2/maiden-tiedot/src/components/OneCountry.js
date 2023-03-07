import { useEffect } from "react"
import axios from "axios"

export const OneCountry = ({country, api_key, weatherData, setWeatherData}) => {
    useEffect(() => {
        axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${api_key}`)
        .then(response => {
            setWeatherData(response.data)
            console.log(response.data)
        })
    }, [] )

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
            <p> Temperature {weatherData.main.temp} celsius </p>
            
            <p> Wind {weatherData.wind.speed} m/s </p>


        </div>
    )

}