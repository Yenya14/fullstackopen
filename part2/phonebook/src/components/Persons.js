import Person from "./Person";
const Persons = ({persons, filterQuery}) => (
    <div>
    {persons.filter(value => value.name.toLowerCase().includes(filterQuery))
        .map(({name,number}) =>
        <Person name = {name} number = {number} />
        )}
        </div>
)
export default Persons;