import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

type Props = {children: any}

const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (text: string): void => {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      //concat creates a new array (it doesnt mutate the existing array)
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string): void => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: onAddTodoHandler,
    removeTodo: removeTodoHandler,
  };


  return (
    <TodosContext.Provider value={contextValue}>
      {props.children }
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;