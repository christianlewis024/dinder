import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from "./Header"
import TinderCards from "./TinderCards"
import SwipeButtons from "./SwipeButtons"

function App() {
  return (
    <div className="app">
     <Router>
     <Header/>
       <Switch>
         <Route path="/chat">
           <h1> i am the chat page</h1>
         </Route>
         <Route path="/">
          <TinderCards/>
          <SwipeButtons/>


         </Route>
     </Switch>
    </Router>
    </div>
  );
}

export default App;
 {/* tinder cards */}
      {/* buttons below tinder cards */}
    {/* chat screen */}
    {/* individual chat screen */}