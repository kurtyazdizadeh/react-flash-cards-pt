import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let view = '';
    switch (event.target.textContent) {
      case 'View Cards':
        view = 'view-cards';
        break;
      case 'Review Cards':
        view = 'review-cards';
        break;
      case 'Create Card':
        view = 'create-card';
        break;
      default:
        break;
    }

    this.props.setView(view);

  }

  render() {
    const anchorClasses = 'nav-item nav-link';
    return (
      <nav className="navbar fixed-top navbar-light bg-light justify-content-around">
        <a
          className={anchorClasses}
          href="#"
          onClick={this.handleClick}
          data="view-cards"
        >
          View Cards
        </a>
        <a
          className={anchorClasses}
          href="#"
          onClick={this.handleClick}
        >
          Review Cards
        </a>
        <a
          className={anchorClasses}
          href="#"
          onClick={this.handleClick}
        >
          Create Card
        </a>
      </nav>
    );
  }
}

export default Nav;
