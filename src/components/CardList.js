import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { arrayList, btnRemove } = this.props;
    const arrayData = [...arrayList];
    return (
      <div className="list-container">
        <div className="list-container">
          { arrayData.map((elem) => (
            <div key={ elem.cardName }>
              <Card
                cardName={ elem.cardName }
                cardDescription={ elem.cardDescription }
                cardAttr1={ elem.cardAttr1 }
                cardAttr2={ elem.cardAttr2 }
                cardAttr3={ elem.cardAttr3 }
                cardImage={ elem.cardImage }
                cardRare={ elem.cardRare }
                cardTrunfo={ elem.cardTrunfo }
              />
              <button type="button" onClick={ () => btnRemove(elem.cardName) }>
                Excluir
              </button>
              {' '}
            </div>
          )) }
        </div>
      </div>
    );
  }
}

CardList.propTypes = {
  arrayList: PropTypes.node.isRequired,
  btnRemove: PropTypes.func.isRequired,
};

export default CardList;
