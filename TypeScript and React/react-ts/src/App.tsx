import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
//npx create-react-app react-ts --template typescript
function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  const onAddTodo = (text: string): void => {
    return;
  };

  return (
    <div>
      <NewTodo onAddTodo={onAddTodo} />
      <Todos items={todos}></Todos>
    </div>
  );
}

export default App;
