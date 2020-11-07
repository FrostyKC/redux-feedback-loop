import Axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  state = {
    feedback: {
      feeling: this.props.store.feelingReducer.feeling,
      understanding: this.props.store.understandingReducer.understanding,
      support: this.props.store.supportReducer.support,
      comments: this.props.store.commentReducer.comments,
    },
  };

  onSubmitClick = (event) => {
    let newFeedback = this.state.feedback;
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
          <p>Feelings: {this.state.feedback.feeling}</p>
          <p>Understanding: {this.state.feedback.understanding}</p>
          <p>Support: {this.state.feedback.support}</p>
          <p>Comments: {this.state.feedback.comments}</p>
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
