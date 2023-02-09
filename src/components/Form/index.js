import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Form extends React.Component {
  optionTrunfo = (trunfo, cardTrunfo, onInputChange) => {
    if (trunfo) {
      return <p data-testid="trunfo-input">Você já tem um Super Trunfo em seu baralho</p>;
    }
    return (
      <label htmlFor="cardTrunfo" className="trunfo">
        <input
          type="checkbox"
          id="cardTrunfo"
          name="cardTrunfo"
          data-testid="trunfo-input"
          checked={cardTrunfo}
          onChange={onInputChange}
        />
        Super Trybe Trunfo
      </label>
    );
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form className="form">
        <label htmlFor="name">
          Nome
          <input
            id="name"
            name="cardName"
            type="text"
            data-testid="name-input"
            value={cardName}
            onChange={onInputChange}
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name="cardDescription"
            data-testid="description-input"
            value={cardDescription}
            onChange={onInputChange}
          />
        </label>
        <div>
          <label htmlFor="cardAttr1">
            Força
            <input
              id="attr01"
              name="cardAttr1"
              type="number"
              max="90"
              min="0"
              data-testid="attr1-input"
              value={cardAttr1}
              onChange={onInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr02">
            Rapidez
            <input
              id="attr02"
              name="cardAttr2"
              type="number"
              max="90"
              min="0"
              data-testid="attr2-input"
              value={cardAttr2}
              onChange={onInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr03">
            Cérebro
            <input
              id="attr03"
              name="cardAttr3"
              type="number"
              max="90"
              min="0"
              data-testid="attr3-input"
              value={cardAttr3}
              onChange={onInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="cardImage">
            Imagem
            <input
              id="cardImage"
              name="cardImage"
              type="text"
              data-testid="image-input"
              value={cardImage}
              onChange={onInputChange}
            />
          </label>
        </div>
        <label htmlFor="rare">
          Raridade:
          <select
            name="cardRare"
            data-testid="rare-input"
            id="rare"
            value={cardRare}
            onChange={onInputChange}
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <div>
          {this.optionTrunfo(hasTrunfo, cardTrunfo, onInputChange)}
        </div>
        <button
          type="button"
          data-testid="save-button"
          disabled={isSaveButtonDisabled}
          onClick={onSaveButtonClick}
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
