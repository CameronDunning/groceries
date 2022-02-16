import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";

import Nav from "./components/Nav";
import AddItem from "./components/AddItem";
import Groceries from "./components/Groceries/index";

import { db } from "./firebase/config";

function App() {
  const [groceries, setGroceries] = useState([]);

  // Get the groceries from firebase
  useEffect(() => {
    const groceriesRef = ref(db, "/groceries");
    onValue(groceriesRef, (snapshot) => {
      const groceriesSnapshot = snapshot.val();
      setGroceries([]);
      if (groceriesSnapshot) {
        const groceriesArray = Object.keys(groceriesSnapshot).map((id) => {
          return { ...groceriesSnapshot[id], id: id };
        });
        setGroceries(groceriesArray);
      }
    });
  }, []);

  return (
    <div className="App">
      <Nav />
      <AddItem />
      <Groceries groceries={groceries} />
    </div>
  );
}

export default App;
