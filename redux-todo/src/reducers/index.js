import { todoReducer } from "./todo";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    todoList: todoReducer
})

export default allReducer