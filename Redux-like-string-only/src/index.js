import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import SecondApp from './component/secondApp';
import Store from "./component/store";

ReactDOM.render(
  <React.StrictMode>
    <p style={{textAlign: "center"}}>Both is using same reducer from reducer.js</p>
    <p style={{textAlign: "center"}}>Both inside {"<Store />"} can using globalState with context</p>
    <hr />

    <Store>
      <App />
      <SecondApp/>
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
