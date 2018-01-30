
const initialState = {
 open: true,
 errorText: "testowe gowno ten redux"
};

const checkpasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKED_PASSWORD':
      return {...state, open: false, errorText: "ten redux to shitto"};
    default:
      return state;
  }
};

export default checkpasswordReducer;