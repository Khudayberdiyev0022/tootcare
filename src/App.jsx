import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavbarMobile from "./components/navbar/NavbarMobile";
import Navbar from "./components/navbar/Navbar";
import TopWrap from "./components/topWrap/TopWrap";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <Router>
        <TopWrap />
          <Navbar />
          <NavbarMobile />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
          </Switch>
      </Router>
    </div>
  )
}

export default App;
