import React, { useContext } from "react";
import { globalContext } from "./store";
export default function SecondApp(){
    console.log("secondapp rendered...");
    const [state, dispatch] = useContext(globalContext);
    function createInput(e){
        e.preventDefault();
        dispatch({
            type:"set",
            value: e.target.value
        })
    }

    return(
        <main style={{textAlign: 'center'}}>
            <hr />
            <h1>secondApp.js</h1>
            <p>state from this file use reducer: {state}</p>
            <input type="text" onInput={createInput}/>
        </main>
    )
};