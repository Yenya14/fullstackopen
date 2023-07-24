const Total = ({parts}) => {
    const exercisesArray = parts.map((part) => part.exercises); 
    const totalExercises = exercisesArray.reduce((a, b) => a + b, 0);
    return (
      <p>
        <strong>
        total of {totalExercises} exercises
        </strong>
      </p>
    );
  };
  
  export default Total;