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
        return <CreateCard addCard={this.addCard} setView={this.setView}/>;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards cards={this.state.cards}/>;
      default:
        return null;
    }
  }

  saveCards() {
    let cardsInLocalStorage = localStorage.getItem('flash-cards');

    const updatedCards = [...this.state.cards];

    if (cardsInLocalStorage) {
      cardsInLocalStorage = JSON.parse(cardsInLocalStorage);
      for (let i = 0; i < cardsInLocalStorage.length; i++) {
        updatedCards.push(cardsInLocalStorage[i]);
      }
    }

    localStorage.setItem('flash-cards', JSON.stringify(updatedCards));
  }

  addCard(card) {
    const cards = this.state.cards ? [...this.state.cards, card] : [card];

    this.setState({ cards: cards }, () => {
      this.saveCards();
    });
  }

  componentDidMount() {
    this.loadCards();
  }

  loadCards() {
    let storedCards = localStorage.getItem('flash-cards');
    storedCards = JSON.parse(storedCards);

    this.setState({ cards: storedCards });
  }

  render() {
    return (
      <div>
        <Nav setView={this.setView} />
        { this.getView() }
      </div>
    );
  }
}

export default App;
