import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ScoreboardPage.css';
import sound from "./swoosh1.wav"
import sound2 from "./swoosh2.wav"


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function ScoreboardPage() {
  
  const dispatch = useDispatch();

  const scoreboard = useSelector(store => store.scoreboard);

  useEffect(() => {
    dispatch({ type: 'FETCH_SCOREBOARD' });
  }, [dispatch]);

  const[count,setCount] = useState(0);
  const[count2,setCount2] = useState(0);


  const Timer = () => {
    const time =[minutes, setMinutes] = useState(0)
  }

  function win(){
   dispatch({ type: 'UPDATE_WIN',
  payload: "1"})
  }
  
  function play() {
    new Audio(sound).play()
  }

  function play2() {
    new Audio(sound2).play()
  }

  return (
    <div className="container">
      <h1>Team 1</h1>
      <h2>{count}</h2>

          <button className="increase" onClick={()=>setCount(count+2)}>2</button>
          <button className="decrease"onClick={()=>setCount(count+3)}>3</button>
          <button onClick={play}>iii</button>
          <button onClick={play2}>iiii</button>

      <h1>Team 2</h1>
      <h2>{count2}</h2>

          <button className="increase" onClick={()=>setCount2(count2+2)}>2</button>
          <button className="decrease" onClick={()=>setCount2(count2+3)}>3</button>

    </div>
  );
}

export default ScoreboardPage;
