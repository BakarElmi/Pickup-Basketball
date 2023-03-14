const courtReducer = (state = [], action) => {
  console.log("in court reducer", action.payload)
  switch (action.type) {
    case 'SET_COURT':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default courtReducer;
