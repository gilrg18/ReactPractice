import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};
//reducer function
const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
        console.log("input");
      return { value: action.value, isTouched: state.isTouched };
    case 'BLUR':
        console.log("blur");
      return { value: state.value, isTouched: true };
    case 'RESET':
        console.log('reset')
      return { value: "", isTouched: false };
    default:
      return initialInputState;
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    //key: value,
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
