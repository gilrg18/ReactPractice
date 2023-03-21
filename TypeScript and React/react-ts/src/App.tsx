
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";
//npx create-react-app react-ts --template typescript
function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos></Todos>
    </TodosContextProvider>
  );
}

export default App;
