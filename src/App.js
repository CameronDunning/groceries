import { useEffect, useState } from "react";
import { set, ref, push, onValue, get } from "firebase/database";

import Title from "./components/Title";
import AddItem from "./components/AddItem";
import Groceries from "./components/Groceries/index";

import { db } from "./firebase/config";

function App() {
  const [groceries, setGroceries] = useState([]);

  const getGroceries = () => {
    const groceriesRef = ref(db, "/groceries");
    onValue(groceriesRef, (snapshot) => {
      const groceriesSnapshot = snapshot.exportVal();
      const groceriesArray = Object.keys(groceriesSnapshot).map((id) => {
        return { ...groceriesSnapshot[id], id: id };
      });
      if (!(JSON.stringify(groceriesArray) === JSON.stringify(groceries))) {
        setGroceries(groceriesArray);
      }
    });
  };

  getGroceries();

  // console.log(groceries);

  return (
    <div className="App">
      <Title />
      <AddItem />
      <Groceries groceries={groceries} />
    </div>
  );
}

export default App;
