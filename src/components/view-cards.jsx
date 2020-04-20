import React from 'react';

class ViewCards extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCards() {
    console.log('view', this.props.cards);
  }

  render() {
    this.renderCards();
    return (

      <div className="col">
        <h1 className="text-center">My Cards</h1>
        <div className="row row-cols-1 row-cols-md-3">

          <div className="col mb-4">
            <div className="card-body bg-dark">
              <h5 className="card-title text-white-50">Question:</h5>
              <p className="card-text text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-body bg-secondary">
              <h5 className="card-title text-white-50">Answer:</h5>
              <p className="card-text text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ViewCards;
