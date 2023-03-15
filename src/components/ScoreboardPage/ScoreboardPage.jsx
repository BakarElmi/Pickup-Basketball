import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ScoreboardPage.css';


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


  
  
  return (
    <div className="container">
      <p>SCOREBOARD Page</p>
      <h1>Team 1</h1>
      <h2>{count}</h2>
      <div className="button-wrapper">
          <button className="increase" onClick={()=>setCount(count+1)}>+</button>
          <button className="decrease"onClick={()=>setCount(count-1)}>-</button>
      </div>
      <h1>Team 2</h1>
      <h2>{count2}</h2>
      <div className="button-wrapper">
          <button onClick={()=>setCount2(count2+1)}>+</button>
          <button onClick={()=>setCount2(count2-1)}>-</button>
      </div>
    </div>
  );
}

export default ScoreboardPage;
