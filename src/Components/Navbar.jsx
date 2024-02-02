
import React from "react";
import { Box, Text } from "@chakra-ui/react";


const Navbar = () => {
 

  return (
    <Box  px={4} p={5} bg={"lightskyblue"} color="white">
    <Text fontSize={30} fontWeight={'bold'} letterSpacing={1.5}>Nationality Predictor</Text>
    </Box>
  );
};

export default Navbar;
