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
          <h3 className='name' style={{ color: '#fff' }}>{cardName}</h3>
          <div className="img-content">
            <img
              src={cardImage}
              alt={cardName}
              className="image"
            />
          </div>
          <div>
            {cardTrunfo ? <div>
              <div className='st'> <p>Super Trunfo</p> </div>
              <div className='description'>
                <p>{cardDescription}</p>
              </div>
              <div className='att'>
                <div className='name'>
                  {cardAttr1 && <p>{`força  ............................................  ${cardAttr1}`}</p>}
                </div>
                <div className='name'>
                  {cardAttr2 && <p>{`rapidez  .......................................  ${cardAttr2}`}</p>}
                </div>
                <div className='name'>
                  {cardAttr3 && <p>{`cérebro  .......................................  ${cardAttr3}`}</p>}
                </div>
                <div className='name'>
                  {cardName
                    && <p
                      style={{ color: 'red', fontWeight: '900' }}>
                      {`raridade  --------  ${cardRare}`}
                    </p>}
                </div>
              </div>            </div>
              : <div>
                <div className='std'> <p></p> </div>
                <div className='description-z'>
                  <p>{cardDescription}</p>
                </div>
                <div className='att-z'>
                  <div className='name'>
                    {cardAttr1 && <p>{`força  ............................................  ${cardAttr1}`}</p>}
                  </div>
                  <div className='name'>
                    {cardAttr2 && <p>{`rapidez  .......................................  ${cardAttr2}`}</p>}
                  </div>
                  <div className='name'>
                    {cardAttr3 && <p>{`cérebro  .......................................  ${cardAttr3}`}</p>}
                  </div>
                  <div className='name'>
                    {cardName
                      && <p
                        style={{ color: 'red', fontWeight: '900' }}>
                        {`raridade  --------  ${cardRare}`}
                      </p>}
                  </div>
                </div>
              </div>
            }
          </div>

        </div>
      </div >
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
