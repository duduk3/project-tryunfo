import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { arrayList } = this.props;
    const arrayData = [...arrayList];
    return (
      <div className="list-container">
        <div className="list-container">
          { arrayData.map((elem, index) => (
            <Card
              key={ `${index}-${elem.cardName}` }
              cardName={ elem.cardName }
              cardDescription={ elem.cardDescription }
              cardAttr1={ elem.cardAttr1 }
              cardAttr2={ elem.cardAttr2 }
              cardAttr3={ elem.cardAttr3 }
              cardImage={ elem.cardImage }
              cardRare={ elem.cardRare }
              cardTrunfo={ elem.cardTrunfo }
            />
          )) }
        </div>
      </div>
    );
  }
}

CardList.propTypes = {
  arrayList: PropTypes.node.isRequired,
};

export default CardList;
