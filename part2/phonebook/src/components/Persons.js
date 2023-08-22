import Person from "./Person";
const Persons = ({persons, filterQuery, deletePerson}) => (
    <div>
    {persons.filter(value => value.name.toLowerCase().includes(filterQuery))
        .map(({name,number,id}) =>
        <Person name = {name} number = {number} deletePerson = {deletePerson(id,name)}/>
        )}
        </div>
)
export default Persons;