import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchScoreboard() {
  console.log("hereeeeee")
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

  //   // the config includes credentials which
  //   // allow the server session to recognize the user
  //   // If a user is logged in, this will return their information
  //   // from the server session (req.user)
    const response = yield axios.get('/api/scoreboard', config);
    console.log('fsgvsfgs', response.data);
  //   // now that the session has given us a user object
  //   // with an id and username set the client-side user object to let
  //   // the client-side code know the user is logged in
    yield put({ type: 'SET_SCOREBOARD', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* winning(action){
  try {
    const playerID = action.payload;
    yield axios.put("/api/player/win", playerID)
    yield put({type: 'FETCH_SCOREBOARD'})
  } catch(error){

  }
}

function* scoreboardSaga() {
  yield takeLatest('FETCH_SCOREBOARD', fetchScoreboard);
  yield takeLatest('UPDATE_WIN', winning);
}

export default scoreboardSaga;