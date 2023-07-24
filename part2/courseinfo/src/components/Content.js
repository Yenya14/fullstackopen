import Part from "./Part"

const Content = ({parts}) => (
    <div>
        {parts.map((value) => 
        (<Part key={value.id} part={value}/>)
        )}
 </div>
)
export default Content;