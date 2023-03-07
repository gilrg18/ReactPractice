import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  //deriving state from enteredName
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const [enteredMail, setEnteredMail] = useState("");
  const [enteredMailTouched, setEnteredMailTouched] = useState(false);

  const enteredMailIsValid = enteredMail.includes("@") && enteredMail.trim() !=="";
  const mailInputIsInvalid = !enteredMailIsValid && enteredMailTouched;

  //useState for validation and to reset / useRef cant do this
  //useRef if you only want to use the data once

  //const formIsValid = enteredNameIsValid && enteredAge && enteredOtherInputField and so on;
  let formIsValid = false;

  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

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
    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredMail("");
    setEnteredMailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
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
          onBlur={nameInputBlurHandler} //whenever the input looses focus
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
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
