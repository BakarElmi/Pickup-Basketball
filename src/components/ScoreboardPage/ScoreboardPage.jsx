import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ScoreboardPage.css';
import sound from "./swoosh1.wav"
import sound2 from "./swoosh2.wav"
import Button from '@material-ui/core/Button'
import { Icon } from "@material-ui/core";
import YourLogo from './sports_basketball.svg'




// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function ScoreboardPage() {
  
  const dispatch = useDispatch();

  const scoreboard = useSelector(store => store.scoreboard);
  const player = useSelector(store => store.player);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_PLAYER' });
  }, [dispatch]);


  useEffect(() => {
    dispatch({ type: 'FETCH_SCOREBOARD' });
  }, [dispatch]);

  const[count,setCount] = useState(0);
  const[count2,setCount2] = useState(0);

  


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

  // style={{ font-family:Montserrat, sans-serif; }}
  // <h8 style={{ fontWeight: 'bold' }} classname="search1" key={item.id}>{item.name }</h8>
  return (
    <div className="containerScore1">
      <div className="containerScore">
      <div className='player1'>
      <h3 >{user.username}</h3>
      <h3>{count}</h3>

          {/* <Button className="increase" onClick={()=>{play2(); setCount(count+2)}}>2</Button>
          <Button className="decrease"onClick={()=>{play(); setCount(count+3)}}>3</Button> */}
          <Icon className="increase" onClick={()=>{play2(); setCount(count+2)}}><img src={YourLogo} height={25} width={25}/></Icon>
          <Icon className="decrease" onClick={()=>{play(); setCount(count+3)}}><img src={YourLogo} height={25} width={25}/></Icon>
      </div>

      <div className='player2'>
      <br></br>
      <br></br>
      <h3>{opponent}</h3>
      <h3>{count2}</h3>

          {/* <button className="increase" onClick={()=>{play2(); setCount2(count2+2)}}>2</button>
          <button className="decrease" onClick={()=>{play(); setCount2(count2+3)}}>3</button> */}
          <Icon className="increase" onClick={()=>{play2(); setCount2(count2+2)}}><img src={YourLogo} height={25} width={25}/></Icon>
          <Icon className="decrease" onClick={()=>{play(); setCount2(count2+3)}}><img src={YourLogo} height={25} width={25}/></Icon>
      </div>
      </div>
    </div>
  );
}

export default ScoreboardPage;
