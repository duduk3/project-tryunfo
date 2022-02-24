import React from 'react';
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

  onInputChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.type === 'checkbox'
      ? target.checked
      : target.value });
  }

  render() {
    const { cardData } = this.state;
    return (
      <div className="content">
        <div>
          <h1>Adicionar nova carta</h1>
          <Form getInputs={ this.onInputChange } />
        </div>
        <div>
          <h1>Pŕe Visulalização</h1>
          <Card cardData={ cardData } />
        </div>
      </div>
    );
  }
}

export default App;
