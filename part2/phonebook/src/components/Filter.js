const Filter = ({query, handleChangedName}) => (
    <div>
    filter shown with {''}
    <input value={query} onChange={handleChangedName}/>
  </div>
)
export default Filter