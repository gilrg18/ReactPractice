import "./Card.css";

const Card = (props) => {
  //className card es default + las classNames que vengan de los props
  //en este caso "expense-item" en ExpenseItem.js y "expenses" de Expenses.js
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}
//special prop built into react = props.children
//props.children sirve para cuando quieres poner componentes dentro de otro componente:
//ejemplo: <Card><ExpenseList/><Card/>
export default Card;
