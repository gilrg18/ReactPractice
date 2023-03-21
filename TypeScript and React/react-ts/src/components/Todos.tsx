import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

//FC = Functional Component
const Todos: React.FC<{ items: Todo[]; removeTodo: (id: string) => void }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          todoText={item.text}
          //bind allows us to preconfigure a function for future execution
          //bing(what "this" keyword will refer to , first argument removeTodo() will receive )
          removeTodo={props.removeTodo.bind(null, item.id)}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
