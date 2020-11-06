import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import Feeling from '../../Pages/Feeling';
import Understanding from '../../Pages/Understanding';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>

        <Router>
          <Route path="/" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
        </Router>
        <br />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(App);
