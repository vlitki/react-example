import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React wuuuuhuu</h1>
        <p>
          Ja sam Vlatko
        </p>
        <p>Your unique ID is: {nanoid()} </p>
        <a className="App-link" target="_blank" rel="noopener noreferrer" href="https://github.com/vlitki/react-example">Github repository</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

import { nanoid } from 'nanoid'
model.id = nanoid()
export default App;
