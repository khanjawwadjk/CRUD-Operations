import React, {useState} from 'react';
// import Login from './components/Login';
// import Portfolio from './components/Portfolio';
import { NavBar } from './components/NavBar';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';
import Home from './components/Home';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from './components/NotFound';
import EditUsers from './components/EditUsers';


function App() {

  
  return (
    <div className="App">
     {/* <Login/> */}
     {/* <Portfolio /> */}

    <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/allUsers" component={AllUsers} />
            <Route exact path="/addUsers" component={AddUsers} />
            <Route exact path="/editUser/:id" component={EditUsers} />
            <Route exact component={NotFound} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
