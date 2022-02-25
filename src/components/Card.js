import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare, cardTrunfo,
    } = this.props;
    console.log(this.props);
    return (
      <div>
        <div>
          <section>
            <h2 data-testid="name-card">{cardName}</h2>
            <img src="dd" alt={ cardImage } data-testid={ cardName } />
            <div data-testid="trunfo-card">{cardTrunfo ? 'Super Tunfo' : ''}</div>
          </section>
          <p data-testid="description-card">{cardDescription}</p>
          <div>
            <div>
              <p>{`Attr01......................${cardAttr1}`}</p>
            </div>
            <div>
              <p>{`Attr02......................${cardAttr2}`}</p>
            </div>
            <div>
              <p>{`Attr03......................${cardAttr3}`}</p>
            </div>
          </div>
          <p data-testid="rare-card">{cardRare}</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
