const [contextData, setContextData] = useContext(state); // get state from importing from global state provider

export default function Reducer(contextData, stored){
  switch(stored.cmd){
  case("setValue"):
    setContextData(stored.value);
    break;
  case("getValue"):
    return contextData;
    break;
  }
}
