
const initialState = {
 open: true
};

const openreduxReducer = (state = initialState, action) => {
  switch (action.type) { 
    case 'CLOSE_REDUX_DIALOG':
      return {...state, open: false};
    case 'OPEN_REDUX_DIALOG':
      return {...state, open: true};
    default:
      return state;
  }
};

export default openreduxReducer;