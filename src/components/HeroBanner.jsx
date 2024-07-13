import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club 💪
      </Typography>
      <Typography fontWeight="700" fontSize="44px" mb="23px" mt="23px">
        Eat, Sleep, Conquer <br /> & Repeat
      </Typography>
      <Typography fontSize={22} lineHeight="35px" mb={5}>
        Check out the most effective exercises in the program
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize="200px"
        sx={{ opacity: 0.1 }}
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"></img>
    </Box>
  );
};

export default HeroBanner;
