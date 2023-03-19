import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchCourt() {
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
    const response = yield axios.get('/api/court', config);
    console.log('fsgvsfgs', response.data);
  //   // now that the session has given us a user object
  //   // with an id and username set the client-side user object to let
  //   // the client-side code know the user is logged in
    yield put({ type: 'SET_COURT', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* fetchFavCourt(){
  try {
    const response = yield axios.get('/api/court/favCourt');
    yield put({ type: 'SET_FAVCOURT', payload: response.data });
  }catch(error){
    console.log('User get request failed', error);
  }
}

function* CreateFavCourt(action){
  try {
    yield axios.post('/api/court/create/favCourt', {courtname: action.payload});
    yield put({ type: 'FETCH_FAVCOURT'});
  }catch(error){
    console.log('User get request failed', error);
  }
}


function* courtSaga() {
  yield takeLatest('FETCH_COURT', fetchCourt);
  yield takeLatest('FETCH_FAVCOURT', fetchFavCourt);
  yield takeEvery('CREATE_FAVCOURT', CreateFavCourt);
}

export default courtSaga;
