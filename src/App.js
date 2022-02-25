import React from 'react';
import PropTypes from 'prop-types';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardData: {},
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    const { cardData } = this.state;
    return (
      <div className="content">
        <div>
          <h1>Adicionar nova carta</h1>
          <Form />
        </div>
        <div>
          <h1>Pŕe Visulalização</h1>
          <Card cardData={ cardData } />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  cardData: PropTypes.object.isRequired,
};

export default App;
