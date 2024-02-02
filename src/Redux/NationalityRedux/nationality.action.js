
import axios from 'axios';
import { GET_NATIONALITY_ERROR, GET_NATIONALITY_REQUEST, GET_NATIONALITY_SUCCESS } from './nationality.actionType';


export const fetchNationality = (query) => async (dispatch) => {
  try {
    dispatch({ type: GET_NATIONALITY_REQUEST });
    const response = await axios.get(`https://api.nationalize.io/?name=${query}`);
    console.log("in action file", response.data)
    dispatch({ type: GET_NATIONALITY_SUCCESS, payload: response.data });
  } catch (error) {
  
    dispatch({ type: GET_NATIONALITY_ERROR });
  }
};