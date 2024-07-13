import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { options, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from '../components/HorizontalScrollbar';


const SearchExercises = ({setExercises, bodyPart, setBodyPart} ) => {
  const [search, setSearch] = useState("");
  
  const [bodyParts, setbodyParts] = useState([]);
  useEffect(function () {
    async function fetchExerciseData() {
      const bodyPartsData = await fetchData(  
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );
      setbodyParts(['all', ...bodyPartsData]); 
      console.log(bodyParts); 
    }

    fetchExerciseData();
  }, []);

  async function handleSearch() {
    const exerciseData = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises?limit=10000',
      options
    );

    const searchedExercises = exerciseData.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search),
    );

    setSearch("");
    setExercises(searchedExercises);
  }
  return (
    <>
      <Stack
        alignItems="center"
        mt="37px"
        justifyContent="center"
        padding="20px"
      >
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="50px"
          textAlign="center"
        >
          Killer Exercises That You <br />
          Should Know
        </Typography>
        <Box position="relative" mb="72px">
          <TextField
            sx={{
              input: {
                fontWeight: 700,
                border: "none",
                borderRadius: "4px",
                width: { lg: "800px", xs: "350px" },
                backgroundColor: "fff",
              },
            }}
            height="76px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className="search-btn"
            onClick={handleSearch}
            sx={{
              backgroundColor: "#FF2625",
              color: "#fff",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
              right: 0,
            }}
          >
            Search
          </Button>
        </Box>
        <Box sx={{position: 'relative', width: '100%', padding: '20px'}}>
              <HorizontalScrollbar data ={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart/>
        </Box>  
      </Stack>
    </>
  );
};

export default SearchExercises;
