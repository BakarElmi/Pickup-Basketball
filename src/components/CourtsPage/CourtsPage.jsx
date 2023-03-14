import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is


let obj1 = [];

function CourtsPage() {
  
  
  const dispatch = useDispatch();
  
  const court = useSelector(store => store.court);
  
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
    // let y = court.map(item => {
    //   item.name
    //   })
    //   console.log("yyyyyyyyy",{y});
    for (var i = 0, l = court.length; i < l; i++) {
      obj = court[i];
      // console.log(obj.name);
      if (x === obj.name){
        console.log(obj.name);
        console.log("matchh");
        obj1.push(obj.name);
      }
  }

  console.log(obj1);

    };

  
  // if (searchInput.length > 0) {
  //     court.filter((court) => {
  //     return court.name.match(searchInput);
  // });
  // }


  return (
    <div className="container">
      <p>Find Courts Page</p>
      {/* { JSON.stringify(court)} */}

      <input type="text" placeholder='court name' onChange={handleChange} />
      <button onClick={obj1}>search</button>
      <button >All</button>
      {court.map(item => {
      return <li>{ "Name: " + item.name}</li>;
      })}

    </div>
  );
}

export default CourtsPage;
