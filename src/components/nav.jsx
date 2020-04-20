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

  renderLinks() {
    const links = ['View Cards', 'Review Cards', 'Create Card'];
    const anchorClasses = 'nav-item nav-link';
    let elements = null;

    elements = links.map((link, index) => {
      return (
        <a
          className={anchorClasses}
          href="#"
          onClick={this.handleClick}
          key={index}
        >
          {link}
        </a>
      );
    });

    return elements;
  }

  render() {

    return (
      <nav className="navbar fixed-top navbar-light bg-light justify-content-around">
        {this.renderLinks()}
      </nav>
    );
  }
}

export default Nav;
