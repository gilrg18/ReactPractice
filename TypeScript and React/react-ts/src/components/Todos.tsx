import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

//FC = Functional Component
const Todos: React.FC = () => {

    const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          todoText={item.text}
          //bind allows us to preconfigure a function for future execution
          //bing(what "this" keyword will refer to , first argument removeTodo() will receive )
          removeTodo={todosCtx.removeTodo.bind(null, item.id)}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
