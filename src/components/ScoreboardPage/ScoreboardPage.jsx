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
  const player = useSelector(store => store.player);

  useEffect(() => {
    dispatch({ type: 'FETCH_PLAYER' });
  }, [dispatch]);


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

  function loss(){
    dispatch({ type: 'UPDATE_LOSS',
   payload: "1"})
   }
  
  function play() {
    new Audio(sound).play()
  }

  function play2() {
    new Audio(sound2).play()
  }


  let opponent = "jayhoops";
  let score = 21;
  const home = Object.values(player)
  console.log("hellooo", count);
 

  if(count >= score){
    alert("you won!!");
    dispatch({ 
      type: 'UPDATE_WIN',
      payload: "1"})
    
    dispatch({ 
      type: 'UPDATE_LOSS',
      payload: "2"})
  }


  if(count2 >= score){
    alert("you lossed!!");
    dispatch({ 
      type: 'UPDATE_LOSS',
      payload: "1"})
  
    dispatch({ 
      type: 'UPDATE_WIN',
      payload: "2"})

  }

  

  return (
    <div className="container">
      
      <h1>{player.map(item => {
      return (<>{item.username}
      </>
      )
    })}</h1>
      <h2>{count}</h2>

          <button className="increase" onClick={()=>setCount(count+2)}>2</button>
          <button className="decrease"onClick={()=>setCount(count+3)}>3</button>
          <button onClick={play}>iii</button>
          <button onClick={play2}>iiii</button>

      <h1>{opponent}</h1>
      <h2>{count2}</h2>

          <button className="increase" onClick={()=>setCount2(count2+2)}>2</button>
          <button className="decrease" onClick={()=>setCount2(count2+3)}>3</button>
      
    </div>
  );
}

export default ScoreboardPage;
