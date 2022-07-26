import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue, query, orderByChild } from "firebase/database";

import { db } from "../firebase/config";
import AddItem from "../components/AddItem";
import Groceries from "../components/Groceries/index";

export const Home = ({ user }) => {
  const [groceries, setGroceries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  // Get the groceries from firebase
  useEffect(() => {
    if (user) {
      const groceriesRef = query(
        ref(db, `/groceries/${user.uid}`),
        orderByChild("grocery")
      );
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
    }
  }, [user]);

  return (
    <>
      <AddItem user={user} />
      <Groceries user={user} groceries={groceries} />
    </>
  );
};
