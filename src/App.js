import Title from "./components/Title";
import Groceries from "./components/Groceries/index";
import AddItem from "./components/Groceries/AddItem";

function App() {
  return (
    <div className="App">
      <Title />
      <AddItem />
      <Groceries />
    </div>
  );
}

export default App;
