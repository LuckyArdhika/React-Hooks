import React, {createContext, useReducer} from "react";
import Reducer from "./reducer";

const initialState = "initial state"; // only string and array allowed

export var globalContext = createContext(initialState);

export default function Store({ children }) {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return(
        <globalContext.Provider value={[state, dispatch]}>
            {children}
        </globalContext.Provider>
    )
}