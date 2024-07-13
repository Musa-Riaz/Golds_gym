import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import {Box} from '@mui/material';
import {options,options_two, fetchData} from '../utils/fetchData';
const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises]= useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [instructions, setInstructions] = useState({});
  const {id} = useParams();

  useEffect(function(){
   async function fetchExercisesData(){
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, options)
      setExerciseDetail(exerciseDetailData);
      setInstructions(exerciseDetailData.instructions);

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, options_two);
      setExerciseVideos(exerciseVideoData.contents);
      console.log(exerciseVideos);

      const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, options);
      setTargetMuscleExercises(targetMuscleExerciseData);
      const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, options);
      setEquipmentExercises(equipmentExerciseData);
    }
    fetchExercisesData();
  }, [id])

 
  return (
   
    <Box>
      <Detail exerciseDetail={exerciseDetail} instructions={instructions}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetails
