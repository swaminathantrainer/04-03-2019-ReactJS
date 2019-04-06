import React, { Component } from 'react';
import HomePageComponent from './pages/HomePageComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import NoMatchComponent from './pages/NoMatchComponent'
import DetailsPageComponent from './pages/DetailsPageComponent';
import GlobalErrorComponent from './components/GlobalErrorComponent';
import LoginPageComponent from './pages/LoginPageComponent';

const App = () => {
  return (
    <GlobalErrorComponent>
      <Router>
        <div>
          <HeaderComponent />
          <div>
            <Switch>
              <Route path="/" exact component={HomePageComponent} />
              <Route path="/items/:itemId" component={DetailsPageComponent} />
              <Route path="/login" exact component={LoginPageComponent} />
              <Route component={NoMatchComponent} />
            </Switch>
          </div>
        </div>
      </Router>
    </GlobalErrorComponent>
  )
};

export default App;
