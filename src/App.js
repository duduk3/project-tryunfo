import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({ [name]: value }, this.validate);
  }

  validate = () => {
    // const { cardName, cardDescription,
    //   cardAttr1, cardAttr2, cardAttr3,
    //   cardImage, cardRare } = this.state;
    // //https://www.codegrepper.com/code-examples/javascript/min+max+in+regex
    // /^.{0,90}$/.test(cardAttr1);
    // /^.{0,90}$/.test(cardAttr2);
    // /^.{0,90}$/.test(cardAttr3);
    // if (cardName && cardDescription && cardImage) {
    //   if(cardAttr1 + cardAttr2 + cardAttr3 <= 210 ) {
    //   return true;
    // }
    console.log(this.state);
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled,
    } = this.state;
    return (
      <div className="content">
        <div>
          <h1>Adicionar nova carta</h1>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.handleChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSubmit }
          />
        </div>
        <div>
          <h1>Pŕe Visulalização</h1>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
      </div>
    );
  }
}

export default App;
