import React, { useCallback, useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState();

  const fetchMealsHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://react-http-sandbox-492c0-default-rtdb.firebaseio.com/Meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMeals = [];

      let count = 0;
      for (const key in data) {
        loadedMeals.push({
          id: key,
          key: count,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
        count += 1;
      }

      setMeals(loadedMeals);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchMealsHandler();
  }, [fetchMealsHandler]);

  let content = <p>SUCK IT</p>;

  if (meals.length > 0) {
    console.log(meals);
    content = meals.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }

  return (
    <section className={classes.meals}>
      <ul>
        <Card>{content}</Card>
      </ul>
    </section>
  );
};

export default AvailableMeals;
