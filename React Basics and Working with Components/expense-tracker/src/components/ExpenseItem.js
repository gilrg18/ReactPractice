import "./ExpenseItem.css";
//A component in react IS a JS function
function ExpenseItem() {
  const expenseDate = new Date(2023, 0, 20);
  const expenseTitle = "Fall Guys Skin";
  const expenseAmount = 4;
  //Its not allowed to have 2 or more root elements in a jsx return statement
  //Fix that by enclosing everything in a single root element, for example a single div
  return (
    //its className cause its jsx, not regular html which would use class
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
