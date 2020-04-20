import React from 'react';

class ViewCards extends React.Component {
  renderCards() {
    const cardElements = this.props.cards.map((card, index) => {
      const titleClasses = 'card-title text-white-50';
      const textClasses = 'card-text text-white';

      return (
        <div className="col mb-4" key={index}>
          <div className="card-body bg-dark">
            <h5 className={titleClasses}>
              Question:
            </h5>
            <p className={textClasses}>
              {card.question}
            </p>
          </div>
          <div className="card-body bg-secondary">
            <h5 className={titleClasses}>
              Answer:
            </h5>
            <p className={textClasses}>
              {card.answer}
            </p>
          </div>
        </div>
      );
    });

    return cardElements;
  }

  render() {
    return (

      <div className="col">
        <h1 className="text-center">My Cards</h1>
        <div className="row row-cols-1 row-cols-md-3">
          { this.renderCards() }
        </div>
      </div>
    );
  }
}

export default ViewCards;
