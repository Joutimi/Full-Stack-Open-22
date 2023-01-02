export const Filter = ({countryFilter, handleCountryChange}) => (
    <form>
        find countries <input
            value={countryFilter}
            onChange={handleCountryChange} />
    </form>
)