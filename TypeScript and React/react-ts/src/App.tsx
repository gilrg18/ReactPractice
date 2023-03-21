import Todos from "./components/Todos";
//npx create-react-app react-ts --template typescript
function App() {
  return (
    <div>
      <Todos items={["React", "TypeScript"]}></Todos>
    </div>
  );
}

export default App;
