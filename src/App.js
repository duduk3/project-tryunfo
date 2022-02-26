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
      isSaveButtonDisabled: true,
      data: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({ [name]: value }, this.validate);
  }

  validate = () => {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage } = this.state;
    // https://levelup.gitconnected.com/writing-a-regex-to-detect-a-range-of-numbers-why-not-just-parse-the-string-to-integers-instead-8a24089eab0b
    const regex90 = /^0|[0-8][0-9]|90$/;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const max90At1 = regex90.test(attr1);
    const max90At2 = regex90.test(attr2);
    const max90At3 = regex90.test(attr3);
    const nameValid = cardName && cardName !== '';
    const descriptionVaild = cardDescription && cardDescription !== '';
    const imageValid = cardImage && cardImage !== '';
    const max210 = attr1 + attr2 + attr3;
    const num210 = 210;
    if (nameValid && descriptionVaild && imageValid
      && max90At1 && max90At2 && max90At3
      && max210 <= num210) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onSubmit = (event) => {
    const { cardName, cardDescription, cardImage, cardTrunfo,
      cardAttr1, cardAttr2, cardAttr3, cardRare, data } = this.state;
    const prevData = { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardRare };
    event.preventDefault();
    this.setState((prev) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      data: [...[prev.data], prevData],
    }));
    console.log(data);
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
