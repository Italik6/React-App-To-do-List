import { combineReducers } from "redux";
import checkpasswordReducer from "./checkpasswordReducer";

export default combineReducers({ checkPassword: checkpasswordReducer });