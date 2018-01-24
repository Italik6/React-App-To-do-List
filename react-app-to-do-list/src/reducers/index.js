import { combineReducers } from "redux";
import checkpasswordReducer from "./articleReducer";

export default combineReducers({ checkPassword: checkpasswordReducer });