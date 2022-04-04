import logo from './logo.svg';
import './App.css';
import { idHelpers } from "./library/helpers";
import { RandomValue } from "./components/RandomValue";
import { RepositoryLink } from "./components/RepositoryLink";
import { ABQuestion } from './components/ABQuestion';



function App() {
  const handleOnChoice = (choiceValue) => console.log(choiceValue);
  
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
        < RepositoryLink>View Github Repository</RepositoryLink>
        <p>
          <RandomValue values={[4, 5, 6, 7]} />   
        </p>
        <ABQuestion question="Make the right choice" buttonA='Blue Pill' buttonB='Red Pill'
        buttonAValue="Blue"
        buttonBValue="Red"
        onChoice={handleOnChoice}
        />
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
