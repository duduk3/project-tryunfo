import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare, cardTrunfo,
    } = this.props;
    return (
      <div className="card-container">
        <div className="card-content">
          <section>
            <h2>{cardName}</h2>
            <img
              src={cardImage}
              alt={cardName}
              className="image"
            />
            {cardTrunfo && <p className="st">Super Trunfo</p>}
          </section>
          <p>{cardDescription}</p>
          <div>
            <div>
              {cardAttr1 && <p>{`força.......${cardAttr1}`}</p>}
            </div>
            <div>
              {cardAttr2 && <p>{`rapidez......${cardAttr2}`}</p>}
            </div>
            <div>
              {cardAttr3 && <p>{`cérebro......${cardAttr3}`}</p>}
            </div>
          </div>
          {cardName && <p>{cardRare}</p>}
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
