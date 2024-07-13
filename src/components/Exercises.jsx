import React from 'react'
import {useState, useEffect} from 'react';
import Pagination from '@mui/material/Pagination';
import ExerciseCard from './ExerciseCard';
import {Box, Stack, Typography} from '@mui/material';
import {options, fetchData} from '../utils/fetchData';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
 
  useEffect(function(){
   async function fetchExercisesData(){
      let exercisesData = [];
      if(bodyPart === "all"){
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises?limit=10000',
          options
        ) 
      }
      else{
        exercisesData =await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options)
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart])
  
  //Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  function paginate(event, value){
    setCurrentPage(value);
    window.scrollTo({top:1800, behavior: 'smooth'})
  }

  return (
    <Box id='exercises' sx={{mt:{lg:'110px'}}}
    mt='50px'
    p='20px'>
<Typography variant='h4' mb="46px">Showing Results</Typography>
<Stack direction="row" sx={{gap:{lg:'110px', xs :'50px'}}} flexWrap="wrap" justifyContent='center'>
   {currentExercises.map((exercise,index) => (<ExerciseCard key={index} exercise={exercise}>{exercise.name}</ExerciseCard>)
   )}
</Stack>
<Stack mt='100px' alignItems='center'>{exercises.length > 9 && (
  <Pagination color='standard' shape='rounded' defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} size='large'/>
)}</Stack>
    </Box>
  )
}

export default Exercises
