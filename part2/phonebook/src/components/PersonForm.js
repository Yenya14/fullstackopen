const PersonForm = ({ name, number, handleNewPerson, handleChangedName, handleChangedNumber }) => (
  <form onSubmit={handleNewPerson}>
    <div>
      name: <input value={name} onChange={handleChangedName} />
    </div>
    <div>
      number:{' '}
      <input value={number} onChange={handleChangedNumber} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);
export default PersonForm;