import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     raridade: '',
  //     superTrunfo: bool,
  //     name: '',
  //   };
  // }

  // inputChange = ({targe}) {
  //   this.setState({ [name] })
  // }

  filterName = (event) => {
    const { arrayList } = this.props;
    // const arrayData = [...arrayList];
    // this.setState({ [name]: value });
    const arrayData = arrayList.filter((elem) => elem.name === event.target.value);
    console.log(arrayData);
  };

  render() {
    const { arrayList, btnRemove } = this.props;
    const arrayData = [...arrayList];

    return (
      <div className="list-container">
        <div>
          <label htmlFor="filter-name">
            Filtros de busca
            <input
              id="filter-name"
              name="name"
              data-testid="name-filter"
              onChange={ this.filterName }
            />
          </label>
        </div>
        <div className="list-content">
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
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => btnRemove(elem.cardName) }
              >
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
  arrayList: PropTypes.array || PropTypes.string,
  btnRemove: PropTypes.func,
}.isRequired;

export default CardList;
