import React from 'react';
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "./context";
import './App.css';
import AddContact from "./components/contacts/AddContact";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";


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
          <Router>
    <div className="App">
      <Header branding="Contact Manager"/>
        <div className="container">
           <Switch>
               <Route exact path="/" component={Contacts} />
               <Route exact path="/contact/add" component={AddContact} />
               <Route exact path="/about" component={About} />
               <Route component={NotFound} />

           </Switch>
        </div>
    </div>
          </Router>
      </Provider>
  );
}

// {/*{hello ? <h2>Hello: {name.toUpperCase() }</h2> : null }*/}
//
// {/*{math}*/}



export default App;
