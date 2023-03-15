import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {/*The tests simply continue to work because the test renders the entire 
      component tree Greeting -> Output*/}
      {!changedText && <Output>Hi, it's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button id="myBtn" onClick={changeTextHandler}>
        Change Text!
      </button>
    </div>
  );
};

export default Greeting;
