import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div>
        <div>
          <section>
            <h2 data-testid="name-card">Name</h2>
            <img src="dd" alt="d" data-testid="image-card" />
            <div data-testid="trunfo-card">trunfo</div>
          </section>
          <p data-testid="description-card">decrição do card</p>
          <div>
            <div>
              <p>Attr01......................</p>
              <div data-testid="attr1-card" />
            </div>
            <div>
              <p>Attr02......................</p>
              <div data-testid="attr2-card" />
            </div>
            <div>
              <p>Attr03......................</p>
              <div data-testid="attr3-card" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
