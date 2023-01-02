import { OneCountry } from "./OneCountry"


export const CountriesList = ({ countriesToShow, setCountryFilter }) => {
    // Jos on vain yksi maa
    if (countriesToShow.length == 1) {
        return (
            countriesToShow.map(country => <OneCountry country={country} key={country.name.common} />)
        )
    }

    const Button = ({ buttonClick, text, countryValue }) => ( 
        <button onClick={() => buttonClick(countryValue)} >
            {text}
        </button> )
    
    const buttonClick = (countryValue) => {
        console.log(countryValue)
        setCountryFilter(countryValue)
    }

    // Jos enemmän kuin 1, mutta vähemmän kuin 10
    if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
    return (
        <div>
            {countriesToShow.map(country => <p key={country.name.common}> {country.name.common} <Button buttonClick={buttonClick} text='show' countryValue={country.name.common} /> </p>  ) }        
        </div> 
        )

    // Jos enemmän kuin 10
    } else {
        return (
            <div>
                <p> Too many matches, specify another filter </p>
            </div>
        )
    }
}