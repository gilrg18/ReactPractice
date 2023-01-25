//import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//A component in react IS a JS function
const ExpenseItem = (props) => {
  //destructuring - useState returns the value and a function to update the value
  //usestate receives the initial value as parameter.
  //const [title, setTitle] = useState(props.title);
  //using const is fine cause we never reassign title using title =, setTitle does that for us when the component gets reevaluated
  //let title = props.title;
  //document.getElementById('root').addEventListener()
  //onClick prop adds and event listener to the <button> in a declarative way
  // const clickHandler = () => {
  //   //this doesnt work because the returned JSX needs to be reevaluated so the component
  //   //can be updated, for the component to be updated we use "useState from the react library"
  //   title = 'Updated!!';
  //   console.log('updated!!');
  // };

  // const clickHandler = () => {
  //   //useState tells react that the component should be reevaluated and updates the component
  //   setTitle('Updated!!');
  //   //console log will print the first title first because setTitle doesnt change the value right away,
  //   //it schedules the state update
  //   console.log(title);
  // }

  //onClick={clickHandler} you pass it as a value, if you pass it as a function (clickHandler())
  //it will execute when the jsx gets rendered

  //Its not allowed to have 2 or more root elements in a jsx return statement
  //Fix that by enclosing everything in a single root element, for example a single div
  return (
    //its className cause its jsx, not regular html which would use class
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
//This component is just there to output some data "STATELESS component" "Dumb Component"