import { counterReducer } from "./todo";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    counter: counterReducer
})

export default allReducer