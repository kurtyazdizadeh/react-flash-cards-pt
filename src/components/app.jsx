import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: []
    };

    this.setView = this.setView.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  setView(view) {
    this.setState({ view: view });
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard addcard={this.addcard}/>;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  saveCards() {
    const cardsJSON = JSON.stringify(this.state.cards);

    localStorage.setItem('flash-cards', cardsJSON);
  }

  addCard(card) {
    const cards = [...this.state.cards];
    cards.push(card);

    this.setState({ cards: cards }, () => {
      this.saveCards();
    });
  }

  render() {
    console.log('Cards from App:', this.state.cards);
    return (
      <div>
        <Nav setView={this.setView} />
        { this.getView() }
      </div>
    );
  }
}

export default App;
