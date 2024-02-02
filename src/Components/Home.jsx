// Home.js
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Center,
  
  Heading,
  Stack,
} from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react'

import { useDispatch, useSelector } from 'react-redux';
import { fetchNationality } from '../Redux/NationalityRedux/nationality.action';
import Result from './Result';


 const Home = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const userData = useSelector(state => state.nationalityReducer.userData);
  const isLoading = useSelector(state => state.nationalityReducer.isLoading);
  const isError = useSelector(state => state.nationalityReducer.isError);

console.log("userDataaaa",userData,"isLoading ",isLoading ,"isError",isError)

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFetchNationality = () => {
    dispatch(fetchNationality(name));
    setName("")
  };
  return (
    <Box mt="10">
      <Center>
     <Stack direction={['column','column', 'row']} spacing='50px'>
   
        <Box boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px" p="10" rounded="md" w="md" ml='10' >
          <Heading as="h2" size="lg" mb="5" color="lightskyblue">
          Predict Nationality 
          </Heading>
          <form>
            <FormControl>
              <FormLabel mt='10' color="lightskyblue">Enter a Name</FormLabel>
              <Input
                type="text"
                        placeholder=""
                        value={name}
                        onChange={handleNameChange}
                required
              />
            </FormControl>
            
            <Button mt="6" colorScheme="blue" onClick={handleFetchNationality} >
              Submit
            </Button>
          </form>
        </Box>
     
     <Box boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px" p="10" rounded="md" w="md" ml='10'>
     <Heading as="h2" size="lg" mb="5" color="lightskyblue">
          Result
          </Heading>

{
  isLoading ? <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/> 
: <Result data = {userData} isLoading={isLoading} isError={isError}/>
}



     {/* {nationalityData && (
      <div>
        <h2>Result:</h2>
        <pre>{JSON.stringify(nationalityData, null, 2)}</pre>
      </div>
    )} */}
     </Box>
     </Stack>
     </Center>
    </Box>
  );

};

export default Home;


// return (
//   <Box>
//     <h1>Nationality Predictor</h1>
//     <div>
//       <input
//         type="text"
//         placeholder="Enter a name"
//         value={name}
//         onChange={handleNameChange}
//       />
//       <button 
//       onClick={handleFetchNationality}
//       >
//           Predict Nationality</button>
//     </div>
//     {nationalityData && (
//       <div>
//         <h2>Result:</h2>
//         <pre>{JSON.stringify(nationalityData, null, 2)}</pre>
//       </div>
//     )}
//   </Box>
// );