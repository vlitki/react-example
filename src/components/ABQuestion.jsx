import PropTypes from "prop-types";


export function ABQuestion (props) {
    return (
        <div>
        <p>{props.question}</p>
          <button onClick={() => props.onChoice(props.buttonAValue)}>{props.buttonA}</button>
          <button onClick={() => props.onChoice(props.buttonBValue)}>{props.buttonB}</button>
      </div>
    );
}

ABQuestion.propTypes = {
    onChoice: PropTypes.func.isRequired,
    question: PropTypes.string.isRequired,
    buttonA: PropTypes.string.isRequired,
    buttonB: PropTypes.string.isRequired,
    buttonAValue: PropTypes.string.isRequired,
    buttonBValue: PropTypes.string.isRequired
};