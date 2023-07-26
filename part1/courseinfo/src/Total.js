const Total = (props) => {
    const exercisesArray = props.parts.map((part) => part.exercises); 
    const totalExercises = exercisesArray.reduce((total, exercises) => total + exercises, 0);
    return (
      <p>Number of exercises {totalExercises}</p>
    );
  };
  
  export default Total;