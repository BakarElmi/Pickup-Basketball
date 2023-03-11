const playerReducer = (state = [], action) => {
  console.log("in player reducer", action.payload)
  switch (action.type) {
    case 'SET_PLAYER':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default playerReducer;
