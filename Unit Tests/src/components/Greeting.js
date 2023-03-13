import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  }
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>Hi, it's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button id='myBtn' onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
