import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
//A component in react IS a JS function
function ExpenseItem(props) {
    

  //Its not allowed to have 2 or more root elements in a jsx return statement
  //Fix that by enclosing everything in a single root element, for example a single div
  return (
    //its className cause its jsx, not regular html which would use class
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
