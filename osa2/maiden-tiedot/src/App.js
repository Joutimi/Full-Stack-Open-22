import { useState, useEffect } from 'react'
import axios from 'axios'
import { CountriesList } from './components/CountriesList'
import { Filter } from './components/Filter'


const App = () => {

  //tieto
  const [countries, setCountries] = useState([])

  //tilat
  const [countryFilter, setCountryFilter] = useState('')

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
    console.log('effect')
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
      <CountriesList countriesToShow={countriesToShow} setCountryFilter={setCountryFilter}/>
    </div>
  );
}

export default App;
