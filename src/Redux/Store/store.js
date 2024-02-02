import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import { nationalityReducer } from "../NationalityRedux/nationality.reducer";


const root = combineReducers({
    nationalityReducer
})



export const store = legacy_createStore(root,applyMiddleware(thunk))