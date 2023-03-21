import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from './Todos.module.css';

//FC = Functional Component
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} todoText={item.text}></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
