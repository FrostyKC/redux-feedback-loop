import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  state = {
    support: '',
  };

  onButtonClick = (event) => {
    if (this.state.support) {
      this.props.dispatch({
        type: 'UPDATE_SUPPORT',
        payload: this.state.support,
      });
      this.props.history.push('/comments');
    } else {
      alert('Please enter a value 1-5.');
    }
  };

  onInputChange = (event) => {
    this.setState(
      {
        support: event.target.value,
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
          <h2>How well are you being supported?</h2>
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

export default connect()(Support);
