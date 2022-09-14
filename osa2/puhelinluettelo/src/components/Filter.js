const Filter = ({filterPersons, handleFilterChange}) => (
  <form>
    filter <input
      value={filterPersons}
      onChange={handleFilterChange} />
  </form>
)

export default Filter