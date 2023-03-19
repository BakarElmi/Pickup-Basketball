import { combineReducers } from "redux";


const courtReducer = (state = [], action) => {
  console.log("in court reducer", action.payload)
  switch (action.type) {
    case 'SET_COURT':
      return action.payload;
    default:
      return state;
  }
};

const favCourtReducer = (state = [], action) => {
  console.log("in court reducer", action.payload)
  switch (action.type) {
    case 'SET_FAVCOURT':
      return action.payload;
    default:
      return state;
  }
};


// user will be on the redux state at:
// state.user
export default combineReducers({courtReducer, favCourtReducer});
