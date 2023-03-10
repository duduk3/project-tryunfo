/* eslint-disable no-unused-expressions */
import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
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
      hasTrunfo: false,
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
    const max90 = 91;
    // https://levelup.gitconnected.com/writing-a-regex-to-detect-a-range-of-numbers-why-not-just-parse-the-string-to-integers-instead-8a24089eab0b
    const regex0 = /^[0-9]|[1-8][0-9]|(90)$/;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const max90Valid = attr1 < max90 && attr2 < max90 && attr3 < max90;
    const min0At1 = regex0.test(attr1);
    const min0At2 = regex0.test(attr2);
    const min0At3 = regex0.test(attr3);
    const nameValid = cardName && cardName !== '';
    const descriptionVaild = cardDescription && cardDescription !== '';
    const imageValid = cardImage && cardImage !== '';
    const max210 = attr1 + attr2 + attr3;
    const num210 = 210;
    if (nameValid && descriptionVaild && imageValid
      && min0At1 && min0At2 && min0At3 && max90Valid
      && max210 <= num210) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onSubmit = (event) => {
    const { cardName, cardDescription, cardImage, cardTrunfo,
      cardAttr1, cardAttr2, cardAttr3, cardRare } = this.state;
    // evita o padr??o para n??o apagar os dados e manter o card na tela
    event.preventDefault();
    const prevData = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      hasTrunfo: cardTrunfo,
      cardRare
    };
    this.setState((prev) => ({ data: [...prev.data, prevData] }));
    // reset no state limpando form para novo preenchimento
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardTrunfo: false,
      cardRare: 'normal',
      hasTrunfo: this.trunfoValidate() || prevData.hasTrunfo,
    });
  }

  trunfoValidate = () => {
    const { data } = this.state;
    const validTrunfo = data.some((elem) => elem.hasTrunfo);
    return validTrunfo;
  }

  removeItem = (key) => {
    const { data } = this.state;
    const exitCard = key;
    const arrayData = data.filter((elem) => elem.cardName !== exitCard);
    const trunfoValid = this.trunfoValidate();
    if (trunfoValid) {
      (this.setState({ data: [...arrayData], hasTrunfo: false }));
    } else {
      (this.setState({ data: [...arrayData] }));
    }
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, hasTrunfo, cardRare,
      cardTrunfo, data, isSaveButtonDisabled,
    } = this.state;
    return (
      <div className="container-app">
        <div className="content">
          <div>
            <h1>Adicionar nova carta</h1>
            <Form
              cardName={cardName}
              cardDescription={cardDescription}
              cardAttr1={cardAttr1}
              cardAttr2={cardAttr2}
              cardAttr3={cardAttr3}
              cardImage={cardImage}
              cardRare={cardRare}
              cardTrunfo={cardTrunfo}
              hasTrunfo={hasTrunfo}
              onInputChange={this.handleChange}
              isSaveButtonDisabled={isSaveButtonDisabled}
              onSaveButtonClick={this.onSubmit}
            />
          </div>
          <div className='content1'>
            <h1>Pr?? Visualiza????o</h1>
            <Card
              cardName={cardName}
              cardDescription={cardDescription}
              cardAttr1={cardAttr1}
              cardAttr2={cardAttr2}
              cardAttr3={cardAttr3}
              cardImage={cardImage}
              cardRare={cardRare}
              cardTrunfo={cardTrunfo}
            />
          </div>
        </div>
        <div className='content2'>
          <CardList
            arrayList={data}
            btnRemove={this.removeItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
