import React from 'react'; //React is always being used under the hood when using JSX code
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  //imperative way:
  //const para = document.createElement('p');
  //para.textContent = 'Hello';
  //document.getElementById('root').append(para);
  //alot of instructions for the DOM, this is the difference between vanilla JS and ReactJS
  return (
    //declarative way:
    <div>
      <h2>Let's get started woo!</h2>
      <Expenses expenseList = {expenses}></Expenses>
    </div>
  );

  //Alternative to above JSX code using React object (harder to read and overal more complicated than JSX):
  //React.createElement(element, attributes, content)
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started wowowo"),
  //   React.createElement(Expenses, { expenseList: expenses })
  // );
}

export default App;
