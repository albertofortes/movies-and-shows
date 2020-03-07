import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Movie from './components/Movie';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path='/' render={(props) => <Home {...props} />} />
            <Route exact path="/movie/:id" component={Movie} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
