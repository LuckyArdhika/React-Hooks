import React, {useContext} from 'react';
import '../App.css';
import {globalContext} from './store';

function App() {
  const [state, dispatch] = useContext(globalContext);
  function createInput(e){
    e.preventDefault();
    dispatch({
        type:"set",
        value: e.target.value
    })
  }
  console.log("App.js rendered..");
  return (
    <div className="App">
      <h1>App.js:</h1>
      <p>Redux-like global state values from secondApp input: {state}</p>
      <input type="text" onInput={createInput}/>
      
    </div>
  );
}

export default App;
