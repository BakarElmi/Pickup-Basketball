import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CourtsPage.css';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is


let obj1 = [];

function CourtsPage() {
  const [obj1, setobj1] = useState([]);
  
  const dispatch = useDispatch();
  
  const court = useSelector(store => store.court.courtReducer);
  
  useEffect(() => {
    dispatch({ type: 'FETCH_COURT' });
  }, [dispatch]);
  


    for (var i = 0, l = court.length; i < l; i++) {
      var obj = court[i];
      // console.log(obj.name);
  }

  const handleChange = (e) => {
    e.preventDefault();
    // setInput(e.target.value);
    let x = e.target.value;
    // console.log("bkhsfbvbsk",x);
    let y = court.map(item => {
      // console.log("items",y);
      })
      console.log("yyyyyyyyy",{x});
      // console.log(obj.name)
    for (var i = 0, l = court.length; i < l; i++) {
      obj = court[i];
      console.log(obj.name);
      if (x === obj.name){
        console.log(obj.name);
        console.log("matchh");
        setobj1([obj]);
      }
      // else {
      //   setobj1([]);
      // }
      console.log("====",obj1);
  }

  // console.log(obj1);

    };

  
  // if (searchInput.length > 0) {
  //     court.filter((court) => {
  //     return court.name.match(searchInput);
  // });
  // }

  // const filtered = court.map(court =>  <Card key={court.name} court={person} />); 
  return (
    <div className="containerCourt">
      {/* { JSON.stringify(court)} */}
      <div className="inpu1">
      <input className="inputbar" type="text" placeholder='court name' onChange={handleChange} />
      {/* <button>search</button> */}
      <button className="input" >All</button>
      {/* <h1>{obj1[0]}</h1> */}
      </div>
      <div className="output">
      {obj1.map(item => {
      return (<>
      <h8 style={{ fontWeight: 'bold' }} classname="search1" key={item.id}>{item.name }</h8>
      <br></br>
      <h8 classname="search" key={item.id}>{item.address}</h8>
      <br></br>
      <h8 classname="search" key={item.id}>{" Notes: " + item.Notes}</h8>
      <div classname="add2">
      <button classname="add1" onClick={() => {dispatch({type:"CREATE_FAVCOURT", payload: item.name })}}>+</button>
      </div>
      </>)
      })}
      </div>

    </div>
  );
}

export default CourtsPage;
