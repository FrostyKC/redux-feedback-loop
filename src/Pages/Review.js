import Axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  onSubmitClick = (event) => {
    let newFeedback = this.props.store.feedbackReducer;
    this.saveNewFeedback(newFeedback);
    this.props.history.push('/submit');
  };

  saveNewFeedback(newFeedback) {
    Axios.post('/feedback', newFeedback)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
        alert('Your feedback did not save.');
      });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Review Your Feedback</h2>
        </div>

        <div>
          <p>Feelings: {this.props.store.feedbackReducer.feeling}</p>
          <p>Understanding: {this.props.store.feedbackReducer.understanding}</p>
          <p>Support: {this.props.store.feedbackReducer.support}</p>
          <p>Comments: {this.props.store.feedbackReducer.comments}</p>
        </div>

        <div>
          <button onClick={this.onSubmitClick}>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(Review);
