import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    //value: alias
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value=>value.trim()!=='');
 
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredMailTouched, setEnteredMailTouched] = useState(false);

  const enteredMailIsValid =
    enteredMail.includes("@") && enteredMail.trim() !== "";
  const mailInputIsInvalid = !enteredMailIsValid && enteredMailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }

  const mailInputChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  };

  const mailInputBlurHandler = (event) => {
    setEnteredMailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    //validation in the front end is just for user experience since it can be accesed and hacked by the clientside users
    //validation should be programmed in the backend

    if (!enteredNameIsValid || !enteredMailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredMail);
    //nameInputRef.current.value=''; //you shouldnt manipulate the DOM directly like this, react should be the one manipulating the DOM
    resetNameInput();
    setEnteredMail("");
    setEnteredMailTouched(false);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const mailInputClasses = mailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameBlurHandler} //whenever the input looses focus
          onChange={nameChangedHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={mailInputClasses}>
        <label htmlFor="mail">Your E-Mail</label>
        <input
          type="email"
          id="mail"
          onBlur={mailInputBlurHandler} //whenever the input looses focus
          onChange={mailInputChangeHandler}
          value={enteredMail}
        />
        {mailInputIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
