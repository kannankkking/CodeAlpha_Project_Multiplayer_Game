import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import './index.css';

function App() {
  return <Game />;
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
