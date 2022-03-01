import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      rarety: 'todas',
      trunfo: false,
    };
  }

  changeFilter = ({ target }) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({ [name]: value });
  };

  filterList = (array) => {
    const { name, rarety, trunfo } = this.state;
    let arrayFilterRare = [...array];
    let arrayFilterName = [...array];

    if (trunfo) {
      return array.filter((e) => e.cardTrunfo === trunfo);
    }
    if (name) {
      arrayFilterName = array.filter((e) => e.cardName.includes(name));
      return arrayFilterName;
    }
    if (rarety !== 'todas') {
      arrayFilterRare = array.filter((e) => e.cardRare === rarety);
      if (name) {
        arrayFilterRare = array.filter((e) => e.cardName.includes(name));
      }
      return arrayFilterRare;
    }
  }

  render() {
    const { arrayList, btnRemove } = this.props;
    const dataFilter = this.filterList(arrayList);
    const showThis = dataFilter === undefined ? arrayList : dataFilter;
    const { name, rarety, trunfo } = this.state;
    return (
      <div className="list-container">
        <div>
          <div>
            <h1>Filtros de busca</h1>
            <input
              id="filter-name"
              name="name"
              type="text"
              data-testid="name-filter"
              value={ name }
              onChange={ this.changeFilter }
            />
            <select
              name="rarety"
              data-testid="rare-filter"
              id="rarety"
              value={ rarety }
              onChange={ this.changeFilter }
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
            <label htmlFor="trunfo">
              <input
                type="checkbox"
                name="trunfo"
                id="trunfo"
                data-testid="rare-filter"
                checked={ trunfo }
                onChange={ this.changeFilter }
              />
              Super Trunfo
            </label>
          </div>
        </div>
        <div className="list-content">
          { showThis
            .map((elem, index) => (
              <div key={ elem.cardName + index }>
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
