import React from 'react';

class CreateCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const change = {};
    switch (event.target.id) {
      case 'question':
        change.question = event.target.value;
        break;
      case 'answer':
        change.answer = event.target.value;
        break;
      default:
        break;
    }
    this.setState(change);
  }

  render() {
    return (
      <div className="create-card">
        <h1 className="text-center">
        Create New Card
        </h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="question">Question:</label>
            <textarea
              className="form-control"
              name="question"
              id="question"
              cols="30"
              rows="3"
              onChange={this.handleChange}
              value={this.state.question}>
            </textarea>
          </div>
          <div className="form-group">
            <label htmlFor="answer">Answer:</label>
            <textarea
              className="form-control"
              name="answer"
              id="answer"
              cols="30"
              rows="3"
              onChange={this.handleChange}
              value={this.state.answer}>
            </textarea>
          </div>
          <div className="form-group buttons">
            <button
              className="btn btn-outline-primary mr-3"
              type="submit"
            >
              Save Card
            </button>
            <button
              className="btn btn-outline-danger"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateCards;
