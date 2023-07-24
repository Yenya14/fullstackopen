const Total = ({parts}) => {
    const exercisesArray = parts.map((part) => part.exercises); 
    const totalExercises = exercisesArray.reduce((total, exercises) => total + exercises, 0);
    return (
      <p>
        <b>
        total of {totalExercises} exercises
        </b>
      </p>
    );
  };
  
  export default Total;