import logo from './logo.svg';
import './App.css';
import { idHelpers } from "./library/helpers";
import { RandomValue } from "./components/RandomValue";
import { RepositoryLink } from "./components/RepositoryLink";



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
        < RepositoryLink />
        <p>
          <RandomValue />
        </p>
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
