function Reducer(state, action){
    switch (action.type) {
        case "set":
            console.log("prev state: "+state);
            return action.value;
        case "setWithSetState":
            console.log("setState...");
        default: throw new Error();
    }
};

// const obj = {
//     stateByState: "initial",
//     setState: () => setState
// };

export default Reducer;
// export default = {state, setState};