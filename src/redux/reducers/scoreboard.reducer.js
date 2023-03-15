const scoreboardReducer = (state = [], action) => {
  console.log("in player reducer", action.payload)
  switch (action.type) {
    case 'SET_SCOREBOARD':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default scoreboardReducer;
