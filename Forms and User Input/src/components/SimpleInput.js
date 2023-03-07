import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //useState for validation and to reset / useRef cant do this
  //useRef if you only want to use the data once
  
  //deriving state from enteredName
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    //validation in the front end is just for user experience since it can be accesed and hacked by the clientside users
    //validation should be programmed in the backend

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    
    console.log(enteredName);
    //nameInputRef.current.value=''; //you shouldnt manipulate the DOM directly like this, react should be the one manipulating the DOM
    setEnteredName("");
    setEnteredNameTouched(false);
  };


  const nameInputClasses = nameInputIsInvalid
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
