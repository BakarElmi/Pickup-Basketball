import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PlayerPage.css'


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


  
  return (
    <div className="container">
      {/* <p>My Player Page</p> */}
      {/* { JSON.stringify(player)} */}
      {player.map(item => {
      return (<><h1>hello, {item.username}</h1>
                <h1>Games:  {item.wins + item.losses}</h1>
                <h1>Wins:  {item.wins}</h1>
                <h1>Loss:  {item.losses}</h1>
                <br></br>
                <h2 >Fav courts:</h2>
                <h3>Luxton Park</h3>
                <h3>Longfellow Park</h3>
                <h3>Painter Park</h3>
      
      </>
      )
    })}
    </div>
  );
}

export default PlayerPage;
