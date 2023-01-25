import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.expenseList.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;
  if(filteredExpenses.length>0){
    expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              amount={expense.amount}
              title={expense.title}
            />
          ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* Render Lists of Data using Array.map() method */}
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
