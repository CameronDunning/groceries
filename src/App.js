import Title from "./components/Title";
import AddItem from "./components/AddItem";
import Groceries from "./components/Groceries/index";

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
