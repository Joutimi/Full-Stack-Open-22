import { useState, useEffect } from 'react'
import axios from 'axios'
import { CountriesList } from './components/CountriesList'
import { Filter } from './components/Filter'


const App = () => {

  //tieto
  const [countries, setCountries] = useState([])

  //säätieto
  const [weatherData, setWeatherData] = useState([])

  //tilat
  const [countryFilter, setCountryFilter] = useState('')

  //api-avain tallennettuna muuttujaan
  const api_key = process.env.REACT_APP_API_KEY

  //käsitellään tilan muutosta
  const handleCountryChange = (event) => {
    console.log(event.target.value)
    setCountryFilter(event.target.value)
  }

  //filteröinti
  const countriesToShow = countries.filter(country => 
    country.name.common.toUpperCase()
    .includes(countryFilter.toUpperCase()))
    
    
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        //logi promisen onnistumisesta
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <Filter countryFilter={countryFilter} handleCountryChange={handleCountryChange} />
      <CountriesList 
        countriesToShow={countriesToShow} 
        setCountryFilter={setCountryFilter} 
        api_key={api_key}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
      />
    </div>
  );
}

export default App;
