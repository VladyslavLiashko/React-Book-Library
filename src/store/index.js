import { createStore, combineReducers } from "redux";
import { AddBookReducer } from "./AddBookReducer";

const mainReducer = combineReducers({
    add: AddBookReducer,

})

export const store = createStore(mainReducer)