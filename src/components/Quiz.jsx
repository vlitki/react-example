import { ABCQuestion } from "./ABCQuestion";
import { ABQuestion } from "./ABQuestion";
import { FreeInputQuestion } from "./FreeInputQuestion";
import { useState } from 'react';
//import { idHelpers } from "./library/helpers";
import { checkPropTypes } from "prop-types";

export function Quiz (props) {
    const [state, setState] = useState({});
  
    const handleAnswer = (id, choiceValue) => {
      setState((currentState) => ({
        ...currentState,
        [id]: choiceValue,
      }));
    };

    // ovdje je add event listener koji kaze: pozovi mi od roditelja neki prop i unutra mi stavi vrijednosti odgovora. odgovori su u stateu
    const handleSubmit = () => {
    props.onSubmit(state, props.id);
    };

  return (
      <div>
          <div>{state.question1}, {state.question2}, {state.question3} </div>
         <FreeInputQuestion id="question3" text="Enter your name" onKeyUp={handleAnswer} /> 
         <ABQuestion 
          id="question1"
          question="Make the right choice"
          buttonA="Blue pill"
          buttonB="Red pill"
          buttonAValue="Blue"
          buttonBValue="Red"
          onChoice={handleAnswer}
        />
        <ABCQuestion
          id="question2"
          question="Make the right choice"
          buttonA="Blue pill"
          buttonB="Red pill"
          buttonC="Pink pill"
          buttonAValue="Blue"
          buttonBValue="Red"
          buttonCValue="Pink"
          onChoice={handleAnswer}
          />
          <button onClick={handleSubmit}>Submit</button>
        
      </div>
  );
}
