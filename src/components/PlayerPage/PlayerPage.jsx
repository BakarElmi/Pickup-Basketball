import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PlayerPage.css'
// import style from './PlayerPage.module.css'


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function PlayerPage() {
  
  const dispatch = useDispatch();

  const player = useSelector(store => store.player);

  useEffect(() => {
    dispatch({ type: 'FETCH_PLAYER' });
    dispatch({ type: 'FETCH_FAVCOURT' });
  }, [dispatch]);

  const favCourt = useSelector(store => store.court.favCourtReducer);

  function removeFavCourt(id){
    console.log(id);

  }


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
      </>
      )
    })}
    
    {favCourt.map(item => {
      return (<div key={item.id}>
      <h7>{item.name}</h7> 
      <button onClick={()=> { dispatch({ type: 'DELETE_FAV' , payload: item.id});}}>remove</button>        
      </div>
      )
    })}

    </div>
  );
}

export default PlayerPage;
