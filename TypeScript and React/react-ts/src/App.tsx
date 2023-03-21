import Todos from "./components/Todos";
import Todo from "./models/todo";
//npx create-react-app react-ts --template typescript
function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
  ]
  return (
    <div>
      <Todos items={todos}></Todos>
    </div>
  );
}

export default App;
