import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let myName = {first:"Tony", middle:"Franky", last:"Kobo"};

ReactDOM.render(
  <React.StrictMode>
  	<div style={{display:"grid", marginInline:"10%", width:"80%", justifyContent:'center',color:"purple", backgroundColor:"red"}}>
	   <h1 style={{display:"flex", marginBottom:0, justifyContent:'center',color:"blue"}}>"Cool"</h1>
  	 <br/> <p>hi, my name is {myName.first} and also {myName.middle}, but u can call me {myName.last}</p>
  	</div>
	  <BrowserRouter>
      <App  />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
