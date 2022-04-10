import logo from './logo.svg';
import './App.css';
import { idHelpers } from "./library/helpers";
import { RandomValue } from "./components/RandomValue";
import { RepositoryLink } from "./components/RepositoryLink";
import { Quiz } from "./components/Quiz";
import { useState } from 'react';


function App() {
  //ovo je 3. tocka vjezbe sa stanjima
  const [quizAnswer, setQuizAnswer] = useState(null);
  //moramo definirati u appu taj handler
  const handleSubmit = (answers, id) => {
   console.log(answers, id);  //stanje ce bit promijenjeno u true kad dobijemo odgovor
   setQuizAnswer({answers, id});
  };
  const id = idHelpers.generateId();
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React wuuuuhuu</h1>
        <p>
          Ja sam Vlatko
        </p>
        <p>
          your unique ID is {id};
        </p>
        < RepositoryLink>View Github Repository</RepositoryLink>
        <p>
          <RandomValue values={[4, 5, 6, 7]} />   
        </p>
        {quizAnswer === null && <Quiz id={id} onSubmit={handleSubmit} />}
        {quizAnswer !== null && <div>{quizAnswer.answers.question1}</div>}
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
