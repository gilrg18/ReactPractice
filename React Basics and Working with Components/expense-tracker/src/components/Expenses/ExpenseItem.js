import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//A component in react IS a JS function
const ExpenseItem = (props) => {
  //document.getElementById('root').addEventListener()
  //onClick prop adds and event listener to the <button> in a declarative way
  const clickHandler = () => {
    console.log("Clicked!!!");
  };
  //onClick={clickHandler} you pass it as a value, if you pass it as a function (clickHandler())
  //it will execute when the jsx gets rendered

  //Its not allowed to have 2 or more root elements in a jsx return statement
  //Fix that by enclosing everything in a single root element, for example a single div
  return (
    //its className cause its jsx, not regular html which would use class
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
