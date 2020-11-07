import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = {
    feeling: '',
  };

  onButtonClick = (event) => {
    if (this.state.feeling) {
      this.props.dispatch({ type: 'UPDATE_FEELING', payload: this.state });
      this.props.history.push('/understanding');
    } else {
      alert('Please enter a value 1-5.');
    }
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
          <label>
            Rate on a scale of 1-5
            <input
              type="number"
              min="1"
              max="5"
              onChange={this.onInputChange}
            />
          </label>
          <button onClick={this.onButtonClick}>Next</button>
        </div>
      </div>
    );
  }
}

export default connect()(Feeling);
