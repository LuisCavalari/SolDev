import { createStore } from "redux";
import combineReducers from './Reducers'

const Store = createStore(combineReducers)

export default Store