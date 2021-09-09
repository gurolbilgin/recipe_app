import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../header/Header";
import homeSvg from '../../../assets/home.svg'


const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

console.log(APP_ID);
console.log(APP_KEY);


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
      {recipes ? (
        <MainContainer>
         {recipes ? (
        <MainContainer>
          {recipes?.map((recipe, index) => (
            <RecipeCardComp key={index} recipe={recipe.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
        </MainContainer>
      )}
    </div>
  );
};

export default Home;
