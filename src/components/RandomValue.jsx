import { arrayHelpers } from "../library/helpers";

//conditional rendering
export function RandomValue(props) {
  const value = arrayHelpers.getRandomElement(props.values);
  
// const element = isOdd
  return (
    <div>
      {value} is {value % 2 === 1 ? "is odd" : "is even"}
    </div>
  );
}