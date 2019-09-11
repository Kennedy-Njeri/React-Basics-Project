import React from 'react';
import Contact from "./components/Contact";
import Header from "./components/Header";

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
    <div className="App">
      <Header branding="Contact Manager"/>
      <Contact name="Kennedy" email="kennedy@gmail.com" phone="0704107711" />
      <Contact name="Carol" email="Carol@gmail.com" phone="0704107814" />
      {/*{hello ? <h2>Hello: {name.toUpperCase() }</h2> : null }*/}

      {/*{math}*/}

    </div>
  );
}

export default App;
