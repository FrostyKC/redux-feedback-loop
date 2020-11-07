import React, { Component } from 'react';
import { connect } from 'react-redux';

class Submit extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Thank you for your feedback!</h2>
        </div>

        <div>
          <button onClick={this.onButtonClick}>Leave New Feedback</button>
        </div>
      </div>
    );
  }
}

export default connect()(Submit);
