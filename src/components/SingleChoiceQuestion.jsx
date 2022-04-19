import PropTypes from "prop-types";
import { ABCQuestion } from "./ABCQuestion";
import { ABQuestion } from "./ABQuestion";


export function SingleChoiceQuestion(props) {
  const optionElements = props.options.map((option) => {
    const id = `${props.id}-${option.id}`;

    return (
      <div key={id}>
        <label>
          <input
            type="radio"
            name="question"
            id={id}
            onChange={() => props.onChoice(props.id, option.value)}
          />
          {option.text}
        </label>
      </div>
    );
  });

  return (
    <div>
      <div>{props.question}</div>
      {optionElements}
    </div>
  );
}

SingleChoiceQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChoice: PropTypes.func.isRequired,
};