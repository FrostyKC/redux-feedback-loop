import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import Feeling from '../../Pages/Feeling';
import Understanding from '../../Pages/Understanding';
import Support from '../../Pages/Support';
import Comments from '../../Pages/Comments';
import Review from '../../Pages/Review';

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
          <Route exact path="/" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} />
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
