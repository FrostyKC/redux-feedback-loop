import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = {
    feeling: '',
  };

  onButtonClick = (event) => {
    this.props.dispatch({ type: 'UPDATE_FEELING', payload: this.state });
    this.props.history.push('/understanding');
  };

  onInputChange = (event) => {
    this.setState(
      {
        feeling: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <div>
          <h2>How are you feeling today?</h2>
        </div>

        <div>
          <input type="number" min="0" max="5" onChange={this.onInputChange} />
          <button onClick={this.onButtonClick}>Next</button>
        </div>
      </div>
    );
  }
}

export default connect()(Feeling);
