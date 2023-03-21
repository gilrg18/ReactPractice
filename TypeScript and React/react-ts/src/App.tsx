import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
//npx create-react-app react-ts --template typescript
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const onAddTodoHandler = (text: string): void => {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      //concat creates a new array (it doesnt mutate the existing array)
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos}></Todos>
    </div>
  );
}

export default App;
