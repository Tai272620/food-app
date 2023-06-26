import { combineReducers, createStore } from "redux";
import foodReducer from "./foodStore/foodStore.reducer";

const rootReducer = combineReducers({
    foodStore : foodReducer
})

export const store = createStore(rootReducer)