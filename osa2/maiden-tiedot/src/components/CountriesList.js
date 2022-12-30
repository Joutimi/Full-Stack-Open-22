export const CountriesList = ({ countriesToShow }) => {
    if (countriesToShow.length == 1) {
        return (
            <div>
            {countriesToShow.map(country => 
            <h2 key={country.name.common}> {country.name.common} </h2> )  
            
            }
            </div>
        )
    }


    if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
    return (
        <div>
            {countriesToShow.map(country => <p key={country.name.common}> {country.name.common} </p> ) }
        </div> 
        )
    } else {
        return (
            <div>
                <p> Too many matches, specify another filter </p>
            </div>
        )
    }
}