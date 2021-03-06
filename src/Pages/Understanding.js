import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  state = {
    understanding: '',
  };

  onButtonClick = (event) => {
    if (this.state.understanding) {
      this.props.dispatch({
        type: 'UPDATE_UNDERSTANDING',
        payload: this.state.understanding,
      });
      this.props.history.push('/support');
    } else {
      alert('Please enter a value 1-5.');
    }
  };

  onInputChange = (event) => {
    this.setState(
      {
        understanding: event.target.value,
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
          <h2>How well are you understanding the content?</h2>
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

export default connect()(Understanding);
