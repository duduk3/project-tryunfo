import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <div>
          <h1>Adicionar nova carta</h1>
          <Form />
        </div>
        <div>
          <h1>Pŕe Visulalização</h1>
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
