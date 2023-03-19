import { number } from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ScoreboardMenuPage.css'


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function PlayerPage() {
  
  const dispatch = useDispatch();

  const player = useSelector(store => store.player);

  useEffect(() => {
    dispatch({ type: 'FETCH_PLAYER' });
  }, [dispatch]);


      
      return (<>
          <h8>opponent</h8>
          <input type="text" placeholder='Username'></input>
          <br></br>
          <h8>Match Point</h8>
          <input type="integer" placeholder='points'></input>

          <button>Play Now</button>
      </>
  );
}

export default PlayerPage;
