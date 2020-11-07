import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    comments: '',
  };

  onButtonClick = (event) => {
    this.props.dispatch({
      type: 'UPDATE_COMMENTS',
      payload: this.state.comments,
    });
    this.props.history.push('/review');
  };

  onInputChange = (event) => {
    this.setState(
      {
        comments: event.target.value,
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
          <h2>Any comments you want to leave?</h2>
        </div>

        <div>
          <input
            type="text"
            placeholder="Say something PLEASE"
            onChange={this.onInputChange}
          />
          <button onClick={this.onButtonClick}>Next</button>
        </div>
      </div>
    );
  }
}

export default connect()(Comments);
