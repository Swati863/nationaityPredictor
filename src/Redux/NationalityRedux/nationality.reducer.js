
import { GET_NATIONALITY_ERROR, GET_NATIONALITY_REQUEST, GET_NATIONALITY_SUCCESS } from "./nationality.actionType"


const initialState = {
   userData : [],
   isLoading:false,
   isError:false
}

export const nationalityReducer = (state=initialState,{type,payload}) =>{
    switch(type){
      
        case GET_NATIONALITY_REQUEST:{
            return {
               ...state,
               isLoading : true
            }
        }

        case GET_NATIONALITY_SUCCESS:{
            return {
              ...state,
              isLoading:false,
             userData : payload,
            }
        }

        case GET_NATIONALITY_ERROR:{
            return {
               ...state,
               isLoading:false,
               isError:true ,
            }
        }
     
        default : return state
        
    }
}



