import React from 'react';
import ReactDOM from 'react-dom';

import { LINEButton } from '../lib/main.js';

class App extends React.Component {
  render() {
    let text = 'LINEで送る';
    let image = '20x20';
    return (
      <div>
        <span>LINEで送るボタン</span>
        <p>
          <LINEButton text={text} image={image} />
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
