import "./ExpenseItem.css";
//A component in react IS a JS function
function ExpenseItem(props) {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", {day: '2-digit'});
    const year = props.date.getFullYear();

  //Its not allowed to have 2 or more root elements in a jsx return statement
  //Fix that by enclosing everything in a single root element, for example a single div
  return (
    //its className cause its jsx, not regular html which would use class
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
