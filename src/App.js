import logo from './logo.svg';
import './App.css';
import {idHelpers, arrayHelpers} from "./library/helpers";

console.log(arrayHelpers.getRandomElement([1, 2, 3]));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React wuuuuhuu</h1>
        <p>
          Ja sam Vlatko
        </p>
        <p>
          your unique ID is {idHelpers.generateId()};
        </p>
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


export default App;
