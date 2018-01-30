import { combineReducers } from "redux";
import openreduxReducer from "./openreduxReducer";

export default combineReducers({ closeReduxDialog: openreduxReducer });