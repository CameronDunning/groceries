import { useState, useEffect } from "react";
import { ref, onValue, query, orderByChild } from "firebase/database";

import Nav from "./components/Nav";
import AddItem from "./components/AddItem";
import Groceries from "./components/Groceries/index";

import { db } from "./firebase/config";

function App() {
  const [groceries, setGroceries] = useState([]);

  // Get the groceries from firebase
  useEffect(() => {
    const groceriesRef = query(ref(db, "/groceries"), orderByChild("grocery"));
    onValue(groceriesRef, (snapshot) => {
      setGroceries([]);
      let groceriesArray = [];
      if (snapshot.size > 0) {
        snapshot.forEach(function (child) {
          groceriesArray.push({ ...child.val(), id: child.key });
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
