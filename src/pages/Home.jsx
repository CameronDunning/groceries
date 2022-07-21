import { useState, useEffect } from "react";
import { ref, onValue, query, orderByChild } from "firebase/database";

import { db } from "../firebase/config";
import AddItem from "../components/AddItem";
import Groceries from "../components/Groceries/index";

export const Home = () => {
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

  console.log("groceries", groceries);

  return (
    <>
      <AddItem />
      <Groceries groceries={groceries} />
    </>
  );
};
