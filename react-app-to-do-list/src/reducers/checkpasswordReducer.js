import { CHECK_PASSWORD } from "../constants/action-types";

const checkpasswordReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_PASSWORD:
      return [...state];
    default:
      return state;
  }
};

export default checkpasswordReducer;