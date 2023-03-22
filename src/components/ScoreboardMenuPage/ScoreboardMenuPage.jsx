import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './ScoreboardMenuPage.css'
import { Button } from '@material-ui/core';



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



  const history = useHistory();
  
  const routeChange = () =>{ 
    let path = `scoreboard`; 
    history.push(path);
  }


      
      return (<>
      <div className='menu'>
        <div className="menu1">
          <h8 className="input">Opponent</h8>
          
          <input classname="inputbar" type="text" ></input>
          <br></br>
          <h8 className="input" >Match Point</h8>
          <input type="number" ></input>
          <br></br>
          <div classname="playnow">
          <Button  style={{ marginLeft: "14px" }} size="large" color="success" variant="outlined" onClick={routeChange}>Play Now</Button>
          </div>
          </div>
          </div>
      </>
  );
}

export default PlayerPage;
