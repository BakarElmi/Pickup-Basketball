import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


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
      <p>My Player Page</p>
      {/* { JSON.stringify(player)} */}
      {player.map(item => {
      return <li>{ "Name: " + item.username}  { "Wins: " + item.wins} { "losss: " + item.losses}</li>;
      })}
    </div>
  );
}

export default PlayerPage;
