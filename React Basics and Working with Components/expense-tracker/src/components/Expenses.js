import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenseList.map((expense) => (
        <ExpenseItem
          date={expense.date}
          amount={expense.amount}
          title={expense.title}
        />
      ))}
    </div>
  );
}

export default Expenses;
