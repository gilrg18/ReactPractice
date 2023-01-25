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

  const filteredExpenses = props.expenseList.filter(expense=>{
    return expense.date.getFullYear().toString === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* Render Lists of Data using Array.map() method */}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
          //You must add a key value, otherwise all items will be updated since the new item will be 
          //added to the bottom of the list in the browser dom but in the top of the list in react so react
          //will try and fix this by updating all items which could lead to bugs and performance issues
          //This happens because thats how react works.. we beed a unique key prop to avoid these issues
            key={expense.id}
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
