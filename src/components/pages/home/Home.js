import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../header/Header";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const APP_ID = "e56fa843";
const APP_KEY = "f2b73b728d1405179875088ee16096de";

const Home = () => {
  const [query, setQuery] = useState("pizza");
  const [recipes, setRecipes] = useState("");
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      console.log(result);

      if (!result.data.more) {
        alert(`There is no such food as ${query}`);
      } else {
        console.log("Please fill the form");
      }
      setRecipes(result.data.hits);
      setQuery("");
    }
  };

  // useEffect(() => {
  //   getData();
  // });
  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
    </div>
  );
};

export default Home;
