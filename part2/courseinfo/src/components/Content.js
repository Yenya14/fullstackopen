import Part from "./Part"

const Content = (props) => (
    <div>
        {props.parts.map((value) => 
        (<Part key={value.id} part={value}/>)
        )}
 </div>
)
export default Content;