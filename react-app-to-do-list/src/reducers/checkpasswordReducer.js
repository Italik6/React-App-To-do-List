import { CHECK_PASSWORD } from "../constants/action-types";

const initialState = {
  open: true
};

const checkpasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_PASSWORD:
      return [action.payload];
    default:
      return state;
  }
};

export default checkpasswordReducer;