import React from 'react';
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "./context";
import './App.css';


function App() {

  // const name = "Kennedy"
  // const hello = true
  // const showMath = false
  //
  // let math
  //
  // if(!showMath) {
  //   math = <h4>1+1 = {1+1}</h4>
  // } else {
  //   math = null
  // }


  return (
      <Provider>
    <div className="App">
      <Header branding="Contact Manager"/>
        <div className="container">
           <Contacts />
        </div>
    </div>
      </Provider>
  );
}

// {/*{hello ? <h2>Hello: {name.toUpperCase() }</h2> : null }*/}
//
// {/*{math}*/}



export default App;
